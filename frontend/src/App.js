import React from 'react';
import MainContainer from './containers/MainContainer.js'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {BrowerRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
