import React from "react";
import Tabs from "./Buttons";
import Categories from "./Categories";
import Img from "./Img";
import Sound from "./Sound";
import Txt from "./Txt";


export default class Layout extends React.Component{
    render(){
      return(
        <div className="wrapper">
        <Tabs />
        <Img />
        <Txt />
        <Categories />
        <Sound />
        </div>
      );
  }
}
