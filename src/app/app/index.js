import React, { useEffect, useState } from "react";

import AliveCode from "../../alive_code/";
import codeLines from "./code";

import "./app.css";

function App()
{
   const [ initialized, setInitialized ] = useState(false);
   const [ aliveCode, setAliveCode ] = useState(new AliveCode());

   useEffect(() => {
      if(!initialized)
      {
         aliveCode.setContainer(document.getElementById("animated-code-container"));
         aliveCode.lines = codeLines;
         aliveCode.colorPalette = [
            "rgb(64,76,100)",
            "rgb(200,200,200)",
            "rgb(236,116,84)",
            "rgb(34,154,138)",
            "rgb(175,110,175)",
         ];

         setInitialized(true);
      }
      else
      {
         aliveCode.start();
      }
   });

   return <div className="app-container">
      <div className="app-content">
         <div className="header table landing">
            <div className="title-container cell vertical-center">
               <h1 className="header-title">
                  <span className="color0">J</span>OAQUIN <span className="color0">R</span>UAIMI
               </h1>
               <p className="header-description color1">Desarrollador web full stack y C++ entusiasta.</p>
            </div>
         </div>
      </div>

      <div className="app-background" id="animated-code-container"></div>
   </div>;
}

export default App;