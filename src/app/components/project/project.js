import React, { Component } from "react";

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
         ></div>
         
         <div className="project-body">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
         </div>
      </div>
   </div>;
}

export default Project;