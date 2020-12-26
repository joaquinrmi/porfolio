import React from "react";
import TextToken from "../../alive_code/text_token";

const codeLines = [
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
   ],
   [],
   [],
   [],
   [],
   [],
   [],
   [],
   [],
   [],
];

export default codeLines;