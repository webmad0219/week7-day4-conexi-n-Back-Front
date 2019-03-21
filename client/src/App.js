import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pepeService from "./service/pepeService"

class App extends Component {

  constructor(){
    super();
    this.state = {
      search: ""
    }
    this.servicePepe = new pepeService();
  }

  handleSearch = (event) => {
    const {value, name} = event.target;
    // const value = event.target.value
    // const name = event.target.name
    console.log(value, name)
    this.setState({search:value}, () => {
      console.log(this.state)
    })
    
  }

  DamealgoPepe = () => { //llamada POST
    this.servicePepe.postPepe(this.state.search)
    .then(console.log)

  }

  DimealgoPepe = () => { //llamada GET
    this.servicePepe.sayPepe()
    .then(info => console.log(info));
  }

  render() {
    this.DimealgoPepe();
    return (
      <div className="App">
        <form action="javascript:;" onSubmit={this.DamealgoPepe}>
          <input type="text" name="search" onChange={this.handleSearch} value={this.state.search}/>
        </form>
      </div>
    );
  }
}

export default App;
