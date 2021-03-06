import React, { useEffect, useState } from "react";

import AliveCode from "../../alive_code/";
import codeLines from "./code";
import colorPalette from "./color_palette";

import Project from "../components/project/";

import "./app.css";
import GITHUB_LOGO32 from "../../res/img/github32-light.png";

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
         aliveCode.colorPalette = colorPalette;
         aliveCode.setFontFamily("'Inconsolata'");
         aliveCode.setFontSize(16);
         aliveCode.setVelocity(15);

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

               <p className="header-description color1">Desarrollador web full stack.</p>

               <div className="center-text">
                  <a href="https://github.com/joaquinrmi" target="_blank">
                     <img src={GITHUB_LOGO32} />
                  </a>
               </div>
            </div>
         </div>

         <div className="content-section">
            <div className="project-container">
               <Project
                  title="Sparrow"
                  language="ts"
                  description="Una copia barata de twitter desarrollada con el stack MERN."
                  img="https://res.cloudinary.com/dyisdzj91/image/upload/v1618426329/Sparrow_1_wzsdd4.png"
                  link="https://github.com/joaquinrmi/sparrow"
               />

               <Project
                  title="Universal Blog"
                  language="ts"
                  description={`Servidor "universal" para blogs desarrollado con Node.js y PostgreSQL.`}
                  img="https://user-images.githubusercontent.com/28006144/114746149-c9cdf180-9d25-11eb-8fbe-dd39e14802c7.png"
                  link="https://github.com/joaquinrmi/universal-blog"
               />

               <Project
                  title="JSON"
                  language="cpp"
                  description="Implementaci??n de JSON en C++."
                  img="https://res.cloudinary.com/dyisdzj91/image/upload/v1618427837/JSON_logo_ogccna.png"
                  link="https://github.com/joaquinrmi/JSON"
               />

               <Project
                  title="Blog Sample"
                  language="js"
                  description="Ejemplo de blog desarrollado con el stack MERN."
                  img="https://user-images.githubusercontent.com/28006144/101951808-5cbf1980-3bd6-11eb-9a9c-c65414c50a05.png"
                  link="https://github.com/joaquinrmi/blog-sample"
               />
            </div>
         </div>
      </div>

      <div className="app-background" id="animated-code-container"></div>
   </div>;
}

export default App;