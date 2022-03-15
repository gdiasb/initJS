import "./src/styles/index.css";
import Main from "./src/sections/Main";
import Hero from "./src/sections/Hero";
import About from "./src/sections/About";

const $root = document.querySelector("#app");
const $colorScheme = window.matchMedia("prefers-color-scheme: light").matches;

$colorScheme
  ? document.body.classList.add("light")
  : document.body.classList.add("dark");


$root.insertAdjacentHTML(
  "beforeend",
  `
  ${Main()}
  ${About()}`
);
