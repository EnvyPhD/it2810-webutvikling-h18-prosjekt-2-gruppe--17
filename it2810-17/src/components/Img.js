import React from "react";
import Art1 from "./svg/Art1";
import Art2 from "./svg/Art2";
import Art3 from "./svg/Art3";
import Art4 from "./svg/Art4";
import Shil1 from "./svg/Shil1";
import Shil2 from "./svg/Shil2";
import Shil3 from "./svg/Shil3";
import Shil4 from "./svg/Shil4";
import Toon1 from "./svg/Toon1";
import Toon2 from "./svg/Toon2";
import Toon3 from "./svg/Toon3";
import Toon4 from "./svg/Toon4";



export default class Img extends React.Component{

  render(){
            return (
                <div className="Img" id="svg">
                    {arrays[this.props.cat][this.props.tab]}
                    <p>Bilder henta frå <a href="https://publicdomainvectors.org">publicdomaincvectors.org</a></p>
                </div>
            );
        }
    }

var arrays = {1:{1: <Art1/>,
                 2: <Art2/>,
                 3: <Art3/>,
                 4: <Art4/>},
              2:{1: <Shil1/>,
                 2: <Shil2/>,
                 3: <Shil3/>,
                 4: <Shil4/>},
              3:{1: <Toon1/>,
                 2: <Toon2/>,
                 3: <Toon3/>,
                 4: <Toon4/>}
             }
