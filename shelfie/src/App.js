import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './component/header/Header';
import Product from './component/product/Product';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form'

class App extends Component {
  render() {
    
    return (
      <div className="App">
          <Header/>
          <Dashboard/>
          <Form/>
          
      </div>
    );
  }
}

export default App;
