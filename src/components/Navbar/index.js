import NavButton from "../NavButton";
import "./style.css";

function Navbar() {
  return `
  ${NavButton("bi-list", "navbutton__menu")}
  <nav class='navlist' id='navlist'>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul> 
  </nav>
  ${
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? NavButton("bi-moon", "navbutton__theme")
      : NavButton("bi-sun", "navbutton__theme")
  }

     `;
}

export default Navbar;