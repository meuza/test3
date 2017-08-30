import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.conponents';
import Footer from './components/fotter.components';
import Calculator from './components/calculator.conponents';

class App extends Component {

  getVall(){
    return "getVall";
  }
  constructor (){
    super ();
    this.age = 800;
    this.name= "meuza";
    this.state = {name: "Kk",age: 800};
  }

  onClick(){
    this.setState({name: "Baa"});
    this.setState({age: 8920});
  }
  setAge(e){
    const age = e.target.value;
    this.setState({age:age});
  }

  render() {
    const list = [
    <Header title="Web app"/>,
  ];

    const name = "meu";
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        {/*<div> Ai Ai, {name}</div>*/}
        {/*<div> Calculate 3+2 = {3+2}</div>*/}
        {/*<div>Call function {(() => {return 1234})()}</div>*/}
        {/*<div>Call getVall method: {this.getVall()}</div>*/}
        {/*<div>Age: {this.age}</div>*/}
        {/*<div>Name: {this.name}</div>*/}
        {/*<div><input></input></div>*/}
        {/*<div><button>submit</button></div>*/}
        <div> 
        <div>My name is {this.state.name}</div>
        <div>AGE : {this.state.age}</div>
        <button onClick={this.onClick.bind(this)}>Click Me Please</button>
        <input onChange={this.setAge.bind(this)}/>
         
         <Header title ={this.state.name} />

         <Header title ="Test title AiAi"  name="DEAD" />
         <Footer />
         <div>-----------------------------</div>
         <div><Calculator /></div>
         <div>-----------------------------</div>
        </div>
      </div>      
    );
  }
}
const fn = (e) =>{


}

export default App;
