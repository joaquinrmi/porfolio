import React, { Component, useState } from "react";

import GITHUB_LOGO64 from "../../../res/img/github64-light.png";

const LANGUAGE = {
   "cpp": {
      value: "C++",
      color: "rgb(243, 75, 125)",
      textColor: "#000"
   },
   "js": {
      value: "JavaScript",
      color: "rgb(247, 221, 30)",
      textColor: "#000"
   },
   "ts": {
      value: "TypeScript",
      color: "rgb(43, 116, 137)",
      textColor: "#fff"
   }
};

function Project(props)
{
   return <div className="project">
      <div className="project-content">
         <div
            className="project-cover"
            style={{
               backgroundImage: 'url("' + props.img + '")',
               backgroundRepeat: "no-repeat",
               backgroundPosition: "top",
               backgroundSize: "cover"
            }}
         >
            <div className="view-more">
               <a href={props.link} className="view-more-cell color0" target="_blank">
                  <img src={GITHUB_LOGO64} />
               </a>
            </div>
         </div>
         
         <div className="project-body">
            <h2>{props.title}</h2>
            <span style={{
               padding: "5px 10px",
               backgroundColor: LANGUAGE[props.language].color,
               color: LANGUAGE[props.language].textColor,
               userSelect: "none"
            }}>
               {LANGUAGE[props.language].value}
            </span>
            <p>{props.description}</p>
         </div>
      </div>
   </div>;
}

export default Project;