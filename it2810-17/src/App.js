import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <body>
        <div class="wrapper">
        <Tabs/>
        <Img/>
        <Txt/>
        <Categories/>
        <Sound/>
        </div>
      </body>
    </div>
    );
  }
}

export default App;

class Tabs extends Component {
  render(){
    return(
      <div class="buttons">
        <button type="button" name="button" id="tab1">Tab1</button>
        <button type="button" name="button" id="tab2">Tab2</button>
        <button type="button" name="button" id="tab3">Tab3</button>
        <button type="button" name="button" id="tab4">Tab4</button>
      </div>
    )
  }
}
class Img extends Component{
  render(){
    return(
      <div class="img">  </div>
    )
  }
}
class Txt extends Component{
  render(){
    return(
      <div class="txt">  </div>
    )
  }
}
class Categories extends Component{
  render(){
    return(
      <div class="categories">
          <div id ="imgcat"></div>
          <div id ="txtcat"></div>
          <div id ="soundcat"></div>
      </div>
    )
  }
}
class Sound extends Component{
  render(){
    return(
      <div class="sound"></div>
    )
  }
}
