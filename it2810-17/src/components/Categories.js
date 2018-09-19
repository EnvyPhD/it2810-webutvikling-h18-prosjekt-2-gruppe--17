import React from "react";

export default class Categories extends React.Component{
  render(){
    return(
      <div className="categories">
        <div id ="imgcat"><ImgForm /></div>
        <div id ="txtcat"><TextForm /></div>
        <div id ="soundcat"><AudioForm /></div>
      </div>
    );
  }
}
//Class for creating the image category radio buttons
class ImgForm extends React.Component{
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
class AudioForm extends React.Component{
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
class TextForm extends React.Component{
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
