import React, { Component } from 'react';
import './assets/css/main.css';
import './App.css';
import Header from './components/Header';
import Component_2_gauche from './components/Component_2_gauche';
import Component_2_droite from './components/Component_2_droite';
import Component_3_gauche from './components/Component_3_gauche';
import Component_3_droite from './components/Component_3_droite';
// import Button from './components/button';
// import Input from './components/input';

export default class App extends Component {
  state={input:''};
  Save(blabla){
    this.setState({input:blabla.target.value})
    console.log(this.state.input);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Component_2_gauche />
        <Component_2_droite />
        <Component_3_gauche />
        <Component_3_droite />
       {/* <Button buttonClick={() => console.log("hey")} nameButton={"Envoyer"}/>
        <Input inputValue={this.state.input} inputOnChange={(blabla) => this.Save(blabla)}/>
*/}
      </div>
    );
  }
}
