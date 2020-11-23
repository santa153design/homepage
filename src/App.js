import React, { Component } from 'react';
import './App.css';

// components
import Main from './components/Main';

// router
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    )
  };
};

export default App;
