import React, { useEffect, useState } from "react";

import AliveCode from "../../alive_code/";
import TextToken from "../../alive_code/text_token";

import "./app.css";

function App()
{
   const [ initialized, setInitialized ] = useState(false);
   const [ aliveCode, setAliveCode ] = useState(new AliveCode());

   useEffect(() => {
      if(!initialized)
      {
         aliveCode.setContainer(document.getElementById("animated-code-container"));
         aliveCode.lines = [
            [
               new TextToken("//", 0, 1),
               new TextToken(" Código de prueba", 0, 0)
            ],
            [
               new TextToken("var", 4, 1, true),
               new TextToken(" message", 1, 1),
               new TextToken(" =", 2, 2),
               new TextToken(" \"Hello World!\"", 3, 3),
               new TextToken(";", 1, 1)
            ]
         ];
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
      <div className="app-content"></div>

      <div className="app-background" id="animated-code-container"></div>
   </div>;
}

export default App;