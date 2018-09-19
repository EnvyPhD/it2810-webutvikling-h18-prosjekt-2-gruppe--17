import React from "react";

export default class Buttons extends React.Component{
  render(){
    return(
      <div className="buttons">
        <button type="button" name="button" id="tab1">Tab1</button>
        <button type="button" name="button" id="tab2">Tab2</button>
        <button type="button" name="button" id="tab3">Tab3</button>
        <button type="button" name="button" id="tab4">Tab4</button>
      </div>
    );
  }
}
