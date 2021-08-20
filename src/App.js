import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Games from './Pages/Games/Games'
import Mods from './Pages/Mods/Mods'
import Other from './Pages/Other/Other'
import AboutMe from './Pages/About Me/AboutMe'
import './App.css';

//detects which URL we are at and renders the correct page
//THE PATHS WILL NEED TO BE CHANGED IF THE BASE URL THE WEBSITE IS HOSTED AT CHANGES
//TODO: add the paths to the other pages once I make them
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/react-portfolio" component={Home} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/mods" component={Mods} />
          <Route exact path="/other" component={Other} />
          <Route exact path="/aboutme" component={AboutMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
