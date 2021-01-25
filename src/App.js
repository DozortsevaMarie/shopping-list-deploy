import React from "react";
import styles from "./App.module.css";
import "antd/dist/antd.css";
import CreateList from "./components/CreateList/CreateList";
import { Route, Switch } from "react-router";
import Profile from "./components/Profile/Profile";
import AboutUs from "./components/AboutUs/AboutUs";
import Settings from "./components/Settings/Settings";
import NavBar from "./components/NavBar/NavBar";
import ListContainer from "./components/ListContainer/ListContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

const Login = React.lazy(() => import("./components/Login/Login"));
const MyShoppingListsContainer = React.lazy(() =>
  import("./components/MyShoppingLists/MyShoppingListsContainer")
);

function App() {
  return (
    <div className={styles.wrapper}>
      <HeaderContainer />
      <NavBar />
      <div className={styles.content}>
        <Route path={"/createList"} component={CreateList} />
        <Route path={"/profile"} component={Profile} />
        <Switch>
          <Route
            exact
            path={"/lists"}
            render={() => (
              <React.Suspense fallback={<div>Loading...</div>}>
                <MyShoppingListsContainer />
              </React.Suspense>
            )}
          />
          <Route path={`/lists/:id?`} children={<ListContainer />} />
        </Switch>
        <Route path={"/about"} component={AboutUs} />
        <Route path={"/settings"} component={Settings} />
        <Route
          path={"/login"}
          render={() => (
            <React.Suspense fallback={<div>Loading...</div>}>
              <LoginContainer />
            </React.Suspense>
          )}
        />
      </div>
    </div>
  );
}

export default App;
