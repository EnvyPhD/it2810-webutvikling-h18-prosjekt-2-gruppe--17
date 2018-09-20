import React from "react";
import Tabs from "./Buttons";
import Categories from "./Categories";
import Img from "./Img";
import Sound from "./Sound";
import Txt from "./Txt";


export default class Layout extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        currentTab: 2,
      };
    }
    updateTabs(e){
      this.setState({currentTab: e});
      console.log(e);
    }

    render(){
      return(
        <div className="wrapper">
        <Tabs updateParent={this.updateTabs.bind(this)}/>
        <Img />
        <Txt />
        <Categories />
        <Sound tab={this.state.currentTab}/>
        </div>
      );
  }
}
