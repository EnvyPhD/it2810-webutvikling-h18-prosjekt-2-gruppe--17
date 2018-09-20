import React from "react";

export default class Sound extends React.Component{
  state = {
    sounds: ['audio/Cinematic/bensound-adventure.mp3', 'audio/Cinematic/bensound-epic.mp3', 'audio/Cinematic/bensound-newdawn.mp3', 'audio/Cinematic/bensound-theduel.mp3', 'audio/Happy/bensound-clearday.mp3', 'audio/Happy/bensound-funday.mp3', 'audio/Happy/bensound-hey.mp3', 'audio/Happy/bensound-smallguitar.mp3', 'audio/Jazz/bensound-jazzcomedy.mp3', 'audio/Jazz/bensound-theelevatorbossanova.mp3', 'audio/Jazz/bensound-thejazzpiano.mp3', 'audio/Jazz/bensound-thelounge.mp3'],
    soundsTab1: ['audio/Cinematic/bensound-adventure.mp3', 'audio/Cinematic/bensound-epic.mp3', 'audio/Cinematic/bensound-newdawn.mp3', 'audio/Cinematic/bensound-theduel.mp3'],
    soundsTab2: ['audio/Happy/bensound-clearday.mp3', 'audio/Happy/bensound-funday.mp3', 'audio/Happy/bensound-hey.mp3', 'audio/Happy/bensound-smallguitar.mp3'],
    soundsTab3: ['audio/Jazz/bensound-jazzcomedy.mp3', 'audio/Jazz/bensound-theelevatorbossanova.mp3'],
    soundsTab4: ['audio/Jazz/bensound-thejazzpiano.mp3', 'audio/Jazz/bensound-thelounge.mp3'],
    linkURL: 'http://localhost:3000/audio/Cinematic/bensound-adventure.mp3'
  };
  constructor(props){
    super(props);
    this.changeCounter = this.changeCounter.bind(this);
    this.decideSongURL = this.decideSongURL.bind(this);
  }
  changeCounter(e){
    if(e === "neg"){
      this.setState({ count: this.state.count - 1});
    }
    else{
      this.setState({ count: this.state.count + 1});
    }
  }

  decideSongURL(){
    if(this.props.tab === 1){
      this.setState({linkURL: 'http://localhost:3000/audio/Cinematic/bensound-adventure.mp3'});
    }
    else if(this.props.tab === 2){
      this.setState({linkURL: 'http://localhost:3000/audio/Happy/bensound-clearday.mp3'});
    }
    else if(this.props.tab === 3){
      this.setState({linkURL: 'http://localhost:3000/audio/Jazz/bensound-jazzcomedy.mp3'});
    }
    else if(this.props.tab === 4){
      this.setState({linkURL: 'http://localhost:3000/audio/Jazz/bensound-thejazzpiano.mp3'});
    }
  }


  render(){
    console.log("Tab: " + this.props.tab);
    return(
      <div className="sound">
        <audio ref="audio_tag" src={this.state.linkURL} controls autoPlay />
        <p>Credits: Music from bensound.com</p>
      </div>
    );
  }
}
