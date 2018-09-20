import React from "react";


export default class Img extends React.Component{
  render(){
            return (
                <div className="img"> <svg id="smiley">
            <circle class="face" cx="128" cy="150" r= "110"/>
            <circle class="monocle" id="monocle" cx="100" cy="126" r="17"/>
            <path class="monocle" d="M23 128 Q41 147  83 126" stroke-dasharray="7,7"/>
            <circle class="left-eye" cx="100" cy="126" r="12"/>
            <circle class="right-eye" cx="156" cy="126" r="12"/>
            <path class="mouth"id="mouth" d="M100 182 Q128 212 156 182"/>
            <rect class="left-eyebrow" x="115" y="70" width="6" height="32" rx="4" ry="4"/>
            <rect class="right-eyebrow" x="170" y="66" width="6" height="32" rx="4" ry="4"/>
            <line class= "hat" x1="30" y1="67" x2="225" y2="67"/>
            <rect class= "hat" x="50" y="0" width="155" height="67"/>
          </svg> </div>
            );
        }
    }
