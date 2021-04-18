import React from "react";

import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import ListPokemon from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Compares from "./router/compares";

function App() {
  const history = useHistory();

  return (
    <div className="container h-screen max-w-full">
      <Navbar />
      <Switch history={history}>
        <Route exact path="/" component={ListPokemon}></Route>
        <Route exact path="/pokemon/:pokemon" component={Card}></Route>
        <Route path="/compare" component={Compares}></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
