import "./src/styles/index.css";
import Header from "./src/sections/Header";
import Hero from "./src/sections/Hero";

const $root = document.querySelector("#app");
const $colorScheme = window.matchMedia("prefers-color-scheme: light").matches;

$colorScheme
  ? document.body.classList.add("light")
  : document.body.classList.add("dark");


$root.insertAdjacentHTML(
  "beforeend",
  `
  ${Header()}
  ${Hero()}`
);
