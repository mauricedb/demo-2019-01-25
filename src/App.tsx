import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DemoForm from './components/DemoForm'
import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="">
        </header>

        <DemoForm />

        <Movies />
      </div>
    );
  }
}

export default App;
