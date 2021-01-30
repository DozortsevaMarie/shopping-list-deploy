import React from "react";
import styles from "./App.module.css";
import "antd/dist/antd.css";
import CreateList from "./components/CreateList/CreateList";
import { Redirect, Route, Switch } from "react-router";
import AboutUs from "./components/AboutUs/AboutUs";
import Settings from "./components/Settings/Settings";
import NavBar from "./components/NavBar/NavBar";
import ListContainer from "./components/ListContainer/ListContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { connect } from "react-redux";

const MyShoppingListsContainer = React.lazy(() =>
  import("./components/MyShoppingLists/MyShoppingListsContainer")
);

function App(props) {
  return (
    <div className={styles.wrapper}>
      <HeaderContainer />
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
                <MyShoppingListsContainer />
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
              <LoginContainer />
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
