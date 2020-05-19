import React from "react";
import { Route, Link } from 'react-router-dom';
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
      <div className="App">
        <Link to="/bubblepage">Bubble Page</Link>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubblepage" component={BubblePage}/>
      </div>
  );
}

export default App;
