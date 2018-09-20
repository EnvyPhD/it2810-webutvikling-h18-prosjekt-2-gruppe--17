import React from "react";

export default class Buttons extends React.Component{
  state = {
    currTab: 2,
    color1: 'black',
    color2: '#046380',
    color3: '#046380',
    color4: '#046380',
  };
  constructor(props){
    super(props);
    this.changeTab = this.changeTab.bind(this);
    this.tabStyle = this.tabStyle.bind(this);
  }
  changeTab(e){
    this.setState({color1: '#046380'})
    this.setState({color2: '#046380'})
    this.setState({color3: '#046380'})
    this.setState({color4: '#046380'})
    if(e === "1"){
      this.setState({currTab: 1})
      this.setState({color1: 'black'})
    }
    else if(e === "2"){
      this.setState({currTab: 2})
      this.setState({color2: 'black'})
    }
    else if(e === "3"){
      this.setState({currTab: 3})
      this.setState({color3: 'black'})
    }
    else if(e === "4"){
      this.setState({currTab: 4})
      this.setState({color4: 'black'})
    }
    this.props.updateParent(e);
  }

  tabStyle(){
    return ({backgroundColor: 'white'})
  }

  render(){
    return(
      <div className="buttons">
        <button style={{backgroundColor: this.state.color1}} className="tab" type="button" name="button" id="tab1" onClick={ () => this.changeTab("1")}>Tab1</button>
        <button style={{backgroundColor: this.state.color2}} className="tab" type="button" name="button" id="tab2" onClick={ () => this.changeTab("2")}>Tab2</button>
        <button style={{backgroundColor: this.state.color3}} className="tab" type="button" name="button" id="tab3" onClick={ () => this.changeTab("3")}>Tab3</button>
        <button style={{backgroundColor: this.state.color4}} className="tab" type="button" name="button" id="tab4" onClick={ () => this.changeTab("4")}>Tab4</button>
      </div>
    );
  }
}
