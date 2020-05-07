import React from 'react';
import Login from './app/components/auth/Login';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
      <Switch>
        <Route path="/" component={Login} exact/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
