import React from "react";

export default class Categories extends React.Component{
  updateImg(e){
    this.props.updateParentImg(e);
  }
  updateTxt(e){
    this.props.updateParentTxt(e);
  }
  updateAud(e){
    this.props.updateParentAud(e);
  }

  render(){
    return(
      <div className="categories">
        <div id ="imgcat"><ImgForm updateParent={this.updateImg.bind(this)} /></div>
        <div id ="txtcat"><TextForm updateParent={this.updateTxt.bind(this)} /></div>
        <div id ="soundcat"><AudioForm updateParent={this.updateAud.bind(this)} /></div>
      </div>
    );
  }
}
//Class for creating the image category radio buttons
class ImgForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedOption: 1,
    };

    this.radioOptionChange = this.radioOptionChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  radioOptionChange(event){
    this.setState({selectedOption: event.target.value});
  }
  handleChange(e){
    this.setState({selectedOption: e})
    this.props.updateParent(e);

  }

  render(){
    return (
      <div>
        <h3> Image category </h3>
        <form>
          <div className="imgRadio">
            <label>
             <input type="radio" value="option1"
              checked={this.state.selectedOption === 1}
              onChange={() => this.handleChange(1)}/>
              Art
            </label>
          </div>

          <div className="imgRadio">
            <label>
             <input type="radio" value="option2"
              checked={this.state.selectedOption === 2}
              onChange={() => this.handleChange(2)}/>
              Silhouette
            </label>
          </div>

          <div className="imgRadio">
            <label>
             <input type="radio" value="option3"
              checked={this.state.selectedOption === 3}
              onChange={() => this.handleChange(3)}/>
              Cartoon
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
      selectedOption: 1,
    };

    this.radioOptionChange = this.radioOptionChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  radioOptionChange(event){
    this.setState({selectedOption: event.target.value});
  }
  handleChange(e){
    this.setState({selectedOption: e})
    this.props.updateParent(e);

  }

  render(){
    return (
      <div>
        <h3> Audio category </h3>
        <form>
          <div className="audioRadio">
            <label>
             <input type="radio" value="option1"
              checked={this.state.selectedOption === 1}
              onChange={() => this.handleChange(1)}/>
              Cinematic
            </label>
          </div>

          <div className="audioRadio">
            <label>
             <input type="radio" value="option2"
              checked={this.state.selectedOption === 2}
              onChange={() => this.handleChange(2)}/>
              Happy
            </label>
          </div>

          <div className="audioRadio">
            <label>
             <input type="radio" value="option3"
              checked={this.state.selectedOption === 3}
              onChange={() => this.handleChange(3)}/>
              Jazz
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
      selectedOption: 1,
    };

    this.radioOptionChange = this.radioOptionChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  radioOptionChange(event){
    this.setState({selectedOption: event.target.value});
  }
  handleChange(e){
    this.setState({selectedOption: e})
    this.props.updateParent(e);

  }

  render(){
    return (
      <div>
        <h3> Text category </h3>
        <form>
          <div className="textRadio">
            <label>
             <input type="radio" value="option1"
              checked={this.state.selectedOption === 1}
              onChange={() => this.handleChange(1)}/>
              Money
            </label>
          </div>

          <div className="textRadio">
            <label>
             <input type="radio" value="option2"
              checked={this.state.selectedOption === 2}
              onChange={() => this.handleChange(2)}/>
              Weather
            </label>
          </div>

          <div className="textRadio">
            <label>
             <input type="radio" value="option3"
              checked={this.state.selectedOption === 3}
              onChange={() => this.handleChange(3)}/>
              Travel
            </label>
          </div>
        </form>
      </div>
    );
  }
}
