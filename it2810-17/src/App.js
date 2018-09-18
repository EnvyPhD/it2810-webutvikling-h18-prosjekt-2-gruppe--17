import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <body>
        <div class="wrapper">
          <div class="buttons">
            <button type="button" name="button" id="tab1">Tab1</button>
            <button type="button" name="button" id="tab2">Tab2</button>
            <button type="button" name="button" id="tab3">Tab3</button>
            <button type="button" name="button" id="tab4">Tab4</button>
          </div>
          <div class="img"> <p>image</p>  </div>
          <div class="txt"> <p>txt</p> </div>
          <div class="categories">
              <div id ="imgcat"></div>
              <div id ="txtcat"></div>
              <div id ="soundcat"></div>
          </div>
          <div class="sound"> <p>sound</p> </div>
        </div>
      </body>
    </div>
    );
  }
}

export default App;
