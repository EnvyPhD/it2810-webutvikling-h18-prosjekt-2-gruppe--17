import React from "react";

export default class Txt extends React.Component{
  render(){
    return(
      <div className="txt"> <FetchTxt />  </div>
    )
  }
}

class FetchTxt extends React.Component {
  constructor(props){
    super(props);
    var category = "category1";
    this.state = {
      data: [null],
    };
  }


  componentDidMount = (category) => {
    fetch('http://localhost:3000/text/category1.json')
      .then(response => response.json())
      .then(json => {
        let text = this.state.text
        // text[category] = json
        this.setState({text});
        console.log(text);
      });
    };

  render(){
    return(

      <div className="txtStash"></div>
    )

  }
}
