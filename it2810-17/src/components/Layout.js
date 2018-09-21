import React from "react";
import Tabs from "./Buttons";
import Categories from "./Categories";
import Img from "./Img";
import Sound from "./Sound";
import Txt from "./Txt";


export default class Layout extends React.Component{
    state={
      currentTab: 1,
      currentImg: 1,
      currentTxt: 1,
      currentAud: 1,
      sounds: ['audio/Cinematic/bensound-adventure.mp3', 'audio/Cinematic/bensound-epic.mp3', 'audio/Cinematic/bensound-newdawn.mp3', 'audio/Cinematic/bensound-theduel.mp3', 'audio/Happy/bensound-clearday.mp3', 'audio/Happy/bensound-funday.mp3', 'audio/Happy/bensound-hey.mp3', 'audio/Happy/bensound-smallguitar.mp3', 'audio/Jazz/bensound-jazzcomedy.mp3', 'audio/Jazz/bensound-theelevatorbossanova.mp3', 'audio/Jazz/bensound-thejazzpiano.mp3', 'audio/Jazz/bensound-thelounge.mp3'],
      cinematic: ['audio/Cinematic/bensound-adventure.mp3', 'audio/Cinematic/bensound-epic.mp3', 'audio/Cinematic/bensound-newdawn.mp3', 'audio/Cinematic/bensound-theduel.mp3'],
      happy: ['audio/Happy/bensound-clearday.mp3', 'audio/Happy/bensound-funday.mp3', 'audio/Happy/bensound-hey.mp3', 'audio/Happy/bensound-smallguitar.mp3'],
      jazz: ['audio/Jazz/bensound-jazzcomedy.mp3', 'audio/Jazz/bensound-theelevatorbossanova.mp3','audio/Jazz/bensound-thejazzpiano.mp3', 'audio/Jazz/bensound-thelounge.mp3'],
      linkURL: 'http://localhost:3000/audio/Cinematic/bensound-adventure.mp3'
    };
    constructor(props){
      super(props);
      this.decideSongURL = this.decideSongURL.bind(this);

    }
    updateTabs(e){
      var a = ((this.state.currentAud - 1) * 4) + e;
      this.setState({currentTab: e});
      this.decideSongURL(a);
    }
    updateImg(e){
      this.setState({currentImg: e});
    }
    updateTxt(e){
      this.setState({currentTxt: e});
    }
    updateAud(e){
      this.setState({currentAud: e});
    }
    decideSongURL(e){
      if(e >= 1 && e < 5){
        this.setState({linkURL: this.state.cinematic[e-1]})
      }
      else if (e >= 5 && e < 9) {
        this.setState({linkURL: this.state.happy[e-5]})
      }
      else if (e >= 9 && e < 13) {
        this.setState({linkURL: this.state.jazz[e-9]})
      }


    }

    render(){
      return(
        <div className="wrapper">
        <Tabs updateParent={this.updateTabs.bind(this)}/>
        <Img tab = {this.state.currentTab} cat = {this.state.currentImg}/>
        <Txt />
        <Categories updateParentImg={this.updateImg.bind(this)} updateParentTxt={this.updateTxt.bind(this)} updateParentAud={this.updateAud.bind(this)}/>
        <Sound tab={this.state.currentTab} url={this.state.linkURL}/>
        </div>
      );
  }
}
