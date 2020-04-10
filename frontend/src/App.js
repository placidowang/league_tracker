import React from 'react';
import MainContainer from './containers/MainContainer.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = "/" component = {MainContainer} />
      </div>
    </Router>
  );
}

export default App;
