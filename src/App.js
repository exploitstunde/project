import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import List from "./Component/List";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <List />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />.
      </Switch>
      <Footer />
    </>
  );
};

export default App;
