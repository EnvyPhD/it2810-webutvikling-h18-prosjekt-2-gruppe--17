import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import categories from './texts.json';

const loadData = () => JSON.parse(JSON.stringify(categories));
console.log(categories);

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
      <div class="txt"> <FetchTxt /> </div>
    )
  }
}
class Categories extends Component{
  render(){
    return(
      <div class="categories">
          <div id ="imgcat"><ImgForm /></div>
          <div id ="txtcat"><TextForm /></div>
          <div id ="soundcat"><AudioForm /></div>
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

//Class for creating the image category radio buttons
class ImgForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      selectedOption: '',
    };

    this.radioOptionChange = this.radioOptionChange.bind(this);
  }

  radioOptionChange(event){
    this.setState({selectedOption: event.target.value});
  }

  render(){
    return (
      <div>
        <h> Image category </h>
        <form>
          <div className="imgRadio">
            <label>
             <input type="radio" value="option1"
              checked={this.state.selectedOption ==="option1"}
              onChange={this.radioOptionChange}/>
              Option1
            </label>
          </div>

          <div className="imgRadio">
            <label>
             <input type="radio" value="option2"
              checked={this.state.selectedOption ==="option2"}
              onChange={this.radioOptionChange}/>
              Option2
            </label>
          </div>

          <div className="imgRadio">
            <label>
             <input type="radio" value="option3"
              checked={this.state.selectedOption ==="option3"}
              onChange={this.radioOptionChange}/>
              Option3
            </label>
          </div>
        </form>
      </div>
    );
  }
}

//Class for creating the audio category radio buttons
class AudioForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      selectedOption: '',
    };

    this.radioOptionChange = this.radioOptionChange.bind(this);
  }

  radioOptionChange(event){
    this.setState({selectedOption: event.target.value});
  }

  render(){
    return (
      <div>
        <h> Audio category </h>
        <form>
          <div className="audioRadio">
            <label>
             <input type="radio" value="option1"
              checked={this.state.selectedOption ==="option1"}
              onChange={this.radioOptionChange}/>
              Option1
            </label>
          </div>

          <div className="audioRadio">
            <label>
             <input type="radio" value="option2"
              checked={this.state.selectedOption ==="option2"}
              onChange={this.radioOptionChange}/>
              Option2
            </label>
          </div>

          <div className="audioRadio">
            <label>
             <input type="radio" value="option3"
              checked={this.state.selectedOption ==="option3"}
              onChange={this.radioOptionChange}/>
              Option3
            </label>
          </div>
        </form>
      </div>
    );
  }
}

//Class for creating the text category radio buttons
class TextForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      selectedOption: '',
    };

    this.radioOptionChange = this.radioOptionChange.bind(this);
  }

  radioOptionChange(event){
    this.setState({selectedOption: event.target.value});
  }

  render(){
    return (
      <div>
        <h> Text category </h>
        <form>
          <div className="textRadio">
            <label>
             <input type="radio" value="option1"
              checked={this.state.selectedOption ==="option1"}
              onChange={this.radioOptionChange}/>
              Option1
            </label>
          </div>

          <div className="textRadio">
            <label>
             <input type="radio" value="option2"
              checked={this.state.selectedOption ==="option2"}
              onChange={this.radioOptionChange}/>
              Option2
            </label>
          </div>

          <div className="textRadio">
            <label>
             <input type="radio" value="option3"
              checked={this.state.selectedOption ==="option3"}
              onChange={this.radioOptionChange}/>
              Option3
            </label>
          </div>
        </form>
      </div>
    );
  }
}
