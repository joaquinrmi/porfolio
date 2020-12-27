import React from "react";
import TextToken from "../../alive_code/text_token";
import CodeLine from "../../alive_code/code_line";

function reserved(str)
{
   return new TextToken(str, 1, 2);
}

function variable(str)
{
   return new TextToken(str, 2, 2);
}

function symbol(str)
{
   return new TextToken(str, 3, 3);
}

function className(str)
{
   return new TextToken(str, 8, 2);
}

function stringToken(str)
{
   return new TextToken(str, 4, 4);
}

function funcToken(str)
{
   return new TextToken(str, 7, 2);
}

function mathOperator(str)
{
   return new TextToken(str, 5, 5);
}

function boolToken(str)
{
   return new TextToken(str, 9, 2);
}

function member(str)
{
   return new TextToken(str, 6, 6);
}

function memberFunc(str)
{
   return new TextToken(str, 7, 6);
}

function number(str)
{
   return new TextToken(str, 10, 10);
}

const codeLines = [
   new CodeLine(0, [
      reserved(`import`),
      variable(` React`),
      symbol(`, {`),
      variable(` useEffect`),
      symbol(`,`),
      variable(` useState`),
      symbol(` }`),
      reserved(` from`),
      stringToken(` "react"`),
      symbol(`;`),
   ]),
   new CodeLine(0, []),
   new CodeLine(0, [
      reserved(`import`),
      className(` AliveCode`),
      reserved(` from`),
      stringToken(` "../../alive_code/"`),
      symbol(`;`)
   ]),
   new CodeLine(0, [
      reserved(`import`),
      variable(` codeLines`),
      reserved(` from`),
      stringToken(` "./code"`),
      symbol(`;`)
   ]),
   new CodeLine(0, [
      reserved(`import`),
      variable(` colorPalette`),
      reserved(` from`),
      stringToken(` "./color_palette"`),
      symbol(`;`)
   ]),
   new CodeLine(0, []),
   new CodeLine(0, [
      reserved(`import`),
      className(` Project`),
      reserved(` from`),
      stringToken(` "../components/project/"`),
      symbol(`;`)
   ]),
   new CodeLine(0, []),
   new CodeLine(0, [
      reserved(`import`),
      stringToken(` "./app.css"`),
      symbol(`;`)
   ]),
   new CodeLine(0, [
      reserved(`import`),
      variable(` GITHUB_LOGO32`),
      reserved(` from`),
      stringToken(` "../../res/img/github32-light.png"`),
      symbol(`;`)
   ]),
   new CodeLine(0, []),
   new CodeLine(0, [
      reserved(`function`),
      funcToken(` App`),
      symbol(`()`)
   ]),
   new CodeLine(0, [
      symbol(`{`)
   ]),
   new CodeLine(0, [
      reserved(`   const`),
      symbol(` [`),
      variable(` initialized`),
      symbol(`,`),
      variable(` setInitialized`),
      symbol(` ]`),
      mathOperator(` =`),
      funcToken(` useState`),
      symbol(`(`),
      boolToken(`false`),
      symbol(`);`)
   ]),
   new CodeLine(1, [
      reserved(`const`),
      symbol(` [`),
      variable(` aliveCode`),
      symbol(`,`),
      variable(` setAliveCode`),
      symbol(` ]`),
      mathOperator(` =`),
      funcToken(` useState`),
      symbol(`(`),
      reserved(`new`),
      className(` AliveCode`),
      symbol(`());`)
   ]),
   new CodeLine(0, []),
   new CodeLine(1, [
      funcToken(`useEffect`),
      symbol(`(()`),
      reserved(` =>`),
      symbol(` {`)
   ]),
   new CodeLine(2, [
      reserved(`if`),
      symbol(`(`),
      mathOperator(`!`),
      variable(`initialized`),
      symbol(`)`)
   ]),
   new CodeLine(2, [
      symbol(`{`)
   ]),
   new CodeLine(3, [
      variable(`aliveCode`),
      mathOperator(`.`),
      memberFunc(`setContainer`),
      symbol(`(`),
      reserved(`document`),
      mathOperator(`.`),
      memberFunc(`getElementById`),
      symbol(`(`),
      stringToken(`"animated-code-container"`),
      symbol(`));`)
   ]),
   new CodeLine(3, [
      variable(`aliveCode`),
      mathOperator(`.`),
      funcToken(`setSize`),
      symbol(`(`),
      reserved(`window`),
      mathOperator(`.`),
      member(`screen`),
      mathOperator(`.`),
      member(`width`),
      symbol(`,`),
      reserved(` window`),
      mathOperator(`.`),
      member(`screen`),
      mathOperator(`.`),
      member(`height`),
      symbol(`);`)
   ]),
   new CodeLine(3, [
      variable(`aliveCode`),
      mathOperator(`.`),
      member(`lines`),
      mathOperator(` =`),
      variable(` codeLines`),
      symbol(`;`)
   ]),
   new CodeLine(3, [
      variable(`aliveCode`),
      mathOperator(`.`),
      member(`colorPalette`),
      mathOperator(` =`),
      variable(` colorPalette`),
      symbol(`;`)
   ]),
   new CodeLine(3, [
      variable(`aliveCode`),
      mathOperator(`.`),
      memberFunc(`sefFontFamily`),
      symbol(`(`),
      stringToken(`"'Inconsolata'"`),
      symbol(`);`)
   ]),
   new CodeLine(3, [
      variable(`aliveCode`),
      mathOperator(`.`),
      memberFunc(`setFontSize`),
      symbol(`(`),
      number(`16`),
      symbol(`);`)
   ]),
   new CodeLine(3, [
      variable(`aliveCode`),
      mathOperator(`.`),
      memberFunc(`setVelocity`),
      symbol(`(`),
      number(`15`),
      symbol(`);`)
   ]),
   new CodeLine(3, []),
   new CodeLine(3, [
      funcToken(`setInitialized`),
      symbol(`(`),
      boolToken(`true`),
      symbol(`);`)
   ]),
   new CodeLine(2, [
      symbol(`}`)
   ]),
   new CodeLine(2, [
      reserved(`else`)
   ]),
   new CodeLine(2, [
      symbol(`{`)
   ]),
   new CodeLine(3, [
      variable(`aliveCode`),
      mathOperator(`.`),
      memberFunc(`start`),
      symbol(`();`)
   ]),
   new CodeLine(2, [
      symbol(`}`)
   ]),
   new CodeLine(1, [
      symbol(`});`)
   ]),
];

export default codeLines;