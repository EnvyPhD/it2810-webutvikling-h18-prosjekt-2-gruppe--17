import React from "react";
import Art1 from "./svg/Art1";



export default class Img extends React.Component{

  render(){
            return (
                <div className="Img">
                    <Art1/>
                    <p>Eventuelle bilder henta frå <a href="https://publicdomainvectors.org">publicdomaincvectors.org</a></p>
                </div>
            );
        }
    }
