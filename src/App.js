import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail"
import Navigation from "./component/Navigation"
import "./App.css";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route paht="/" exact={true} component={Home} />        
      <Route paht="/about" component={About} />
      <Route paht="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;