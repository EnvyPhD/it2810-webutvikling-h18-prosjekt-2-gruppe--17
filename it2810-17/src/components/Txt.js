import React from "react";

export default class Txt extends React.Component{
  render(){
    return(
<<<<<<< HEAD
      <div className="txt"> <FetchTxt />  </div>
=======
      <div className="txt">  <p> Fritt hentet frå<a href="https://www.azlyrics.com/"> azlyrics.com</a> </p> </div>
>>>>>>> 15b33591b9f3c7d0dc2c87e27607b1d3673668ab
    )
  }
}

// Class for fetching the texts stored in a json-file
class FetchTxt extends React.Component {
  constructor(props){
     super(props);
     this.fetchData = this.fetchData.bind(this);
     this.componentDidMount = this.componentDidMount.bind(this);
     this.state = {
       texts: {},
       txts: [],
       text: '',
       author: ''
     };

   }

   // Runs when the app renders to fetch new data
   componentDidMount(){
     this.fetchData();
   }

   // Function for fetching json data and saving it as state
   fetchData(){
   fetch('http://localhost:3000/text/texts.json')
     .then(response => response.json())
     .then(data => {
       this.setState({texts: data.texts});

       // console.log(this.state.texts);
       const txt = this.state.texts;

       for (var i in txt){
         console.log(txt[i]);
       }

     })
      // Cathes any errors in the fetch and prevents crash
     .catch(e => {
       console.log(e);
     })
 }



   render(){
     console.log(this.state.texts);
     return(
       <div className="textContainer">

       </div>
     )

   }
}
