import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import LogIn from "./pages/login/LogIn";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact={true} path={'/'}>
            <Home/>
          </Route>
          <Route path={'/sign-up'}>
            <SignUp/>
          </Route>
          <Route path={'/log-in'}>
            <LogIn/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
