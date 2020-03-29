import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./component/Navigation"

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route paht="/" exact={true} component={Home} />        
      <Route paht="/about" component={About} />
    </HashRouter>
  );
}

export default App;