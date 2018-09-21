import React from "react";

export default class Sound extends React.Component{
  render(){
    return(
      <div className="sound">
        <audio ref="audio_tag" src={this.props.url} controls autoPlay/>;
        <p>Credits: Music from <a href="https://www.bensound.com/">bensound.com</a></p>;
      </div>
    );
  }
}
