import React, { useEffect, useState } from "react";

import AliveCode from "../../alive_code/";
import codeLines from "./code";

import "./app.css";
import Project from "../components/project/project";

function App()
{
   const [ initialized, setInitialized ] = useState(false);
   const [ aliveCode, setAliveCode ] = useState(new AliveCode());

   useEffect(() => {
      if(!initialized)
      {
         aliveCode.setContainer(document.getElementById("animated-code-container"));
         aliveCode.setSize(window.screen.width, window.screen.height);
         aliveCode.lines = codeLines;
         aliveCode.colorPalette = [
            "rgb(64,76,100)",
            "rgb(200,200,200)",
            "rgb(236,116,84)",
            "rgb(34,154,138)",
            "rgb(175,110,175)",
         ];
         aliveCode.setFontFamily("'Inconsolata'");
         aliveCode.setFontSize(16);

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

         <div className="content-section project-container">
            <Project
               title="Blog Sample"
               description="Ejemplo de blog desarrollado con el stack MERN."
               img="https://user-images.githubusercontent.com/28006144/101951808-5cbf1980-3bd6-11eb-9a9c-c65414c50a05.png"
            />
            <Project
               title="JSON"
               description="Implementación de JSON en C++."
               img="https://user-images.githubusercontent.com/28006144/103159815-b87bcc00-47ac-11eb-9fca-c29ec4fd1984.png"
            />
            <Project
               title="Language"
               description="Librería para definir y trabajar con lenguajes en C++."
               img="https://user-images.githubusercontent.com/28006144/103160068-7902af00-47af-11eb-99e0-ffe77c7bfc97.png"
            />
            <Project
               title="Animated Score"
               description="Partitura musical animada en <canvas>."
               img="https://user-images.githubusercontent.com/28006144/103160110-ea426200-47af-11eb-8d9c-387ad7b70e06.png"
            />
         </div>
      </div>

      <div className="app-background" id="animated-code-container"></div>
   </div>;
}

export default App;