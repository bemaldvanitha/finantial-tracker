import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import LogIn from "./pages/login/LogIn";
import NavBar from "./components/NavBar";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      { authIsReady && <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact={true} path={'/'}>
            { !user && <Redirect to={'/log-in'}/> }
            { user && <Home/> }
          </Route>
          <Route path={'/sign-up'}>
            { user && <Redirect to={'/'}/> }
            { !user && <SignUp/> }
          </Route>
          <Route path={'/log-in'}>
            { user && <Redirect to={'/'}/> }
            { !user && <LogIn/> }
          </Route>
        </Switch>
      </BrowserRouter> }
    </div>
  );
}

export default App
