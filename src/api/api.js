import { createServer } from "miragejs";
import * as axios from 'axios';

createServer({
  routes() {
    this.get("api/auth/me", () => ({
      resultCode: 0,
      users: [{
        id: 2,
        username: "blabla@bla.bla",
      }]
    }));

    let newId = 3
    this.post("api/auth/login", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = newId++

      return {
        resultCode: 0,
        user: attrs
      }
    });
  },
});


let instance = axios.create({
  baseURL: `api/`,
  withCredentials: true,
});


export const authAPI = {
  authorization() {
    return(
        instance.get(`auth/me`)
    )
  },
  login(email, password, rememberMe = false) {
    return (
        instance.post(`auth/login`, {email, password, rememberMe})
    )
  },
  logout() {
    return (
        instance.delete(`auth/login`)
    )
  },
}