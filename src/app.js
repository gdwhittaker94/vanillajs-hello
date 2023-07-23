/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function log(input) {
  console.log(input);
}

// ABAJO DE AQUÍ

const who = [
  "My dog",
  "John",
  "Juana la loca",
  "ChatGPT",
  "My parrot",
  "Romeo Santos",
  "A ghost",
  "Your mother"
];
const action = [
  "ate",
  "destroyed",
  "burned",
  "flushed down the toilet",
  "psychologically damaged",
  "imprisoned",
  "gave a good talking to",
  "covered in jam"
];
const what = [
  "my keys",
  "my computer",
  "my life",
  "my soul",
  "my car",
  "my work",
  "our dignity",
  "my happiness"
];
const when = [
  "just now",
  "this morning",
  "this afternoon",
  "yesterday",
  "in a dream I had",
  "in a future life",
  "in a past life",
  "last week"
];

function itemSelection(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  let randomItem = array[randomNum];
  return randomItem;
}

let whoItem = itemSelection(who);
let actionItem = itemSelection(action);
let whatItem = itemSelection(what);
let whenItem = itemSelection(when);

function excuseGenerator(whoItem, actionItem, whatItem, whenItem) {
  let excuseArray = whoItem
    .concat(actionItem)
    .concat(whatItem)
    .concat(whenItem);
  let excuseString = excuseArray.toString();
  return excuseString;
}

let excuse = excuseGenerator(whoItem, actionItem, whatItem, whenItem);
const excuseElem = document.querySelector("#excuse");
excuseElem.innerText = excuse;
