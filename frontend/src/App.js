import React from 'react';
// import './App.css'; // came with create-react-app, can remove
import MainContainer from './containers/MainContainer.js'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main style={{marginTop: '64px'}}>
      <MainContainer />
      </main>
    </div>
  );
}

export default App;
