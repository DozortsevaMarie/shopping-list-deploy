import React from "react";
import styles from "./App.module.css";
import "antd/dist/antd.css";
import { Redirect, Route, Switch } from "react-router";
import AboutUs from "./pages/AboutUs/AboutUs";
import Settings from "./pages/Settings/Settings";
import NavBar from "./components/NavBar/NavBar";
import ListContainer from "./components/ListContainer/ListContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import { connect } from "react-redux";
import CreateList from "./pages/CreateList/CreateList";
import Header from "./components/Header/Header";

const MyShoppingLists = React.lazy(() =>
  import("./pages/MyShoppingLists/MyShoppingLists")
);
const Login = React.lazy(() => import("./pages/Login/Login"));

function App(props) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <NavBar />
      <div className={styles.content}>
        <Route path={"/create-list"} component={CreateList} />
        <Route path={"/profile"} component={ProfileContainer} />
        <Switch>
          <Route
            exact
            path={"/lists"}
            render={() => (
              <React.Suspense fallback={<div>Loading...</div>}>
                <MyShoppingLists />
              </React.Suspense>
            )}
          />
          <Route path={`/lists/:id?`}>
            {props.savedLists.length !== 0 ? (
              <ListContainer />
            ) : (
              <Redirect to={"/lists"} />
            )}
          </Route>
        </Switch>
        <Route path={"/about"} component={AboutUs} />
        <Route path={"/settings"} component={Settings} />
        <Route
          path={"/login"}
          render={() => (
            <React.Suspense fallback={<div>Loading...</div>}>
              <Login />
            </React.Suspense>
          )}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  savedLists: state.mainPageReducer.savedLists,
});

export default connect(mapStateToProps)(App);
