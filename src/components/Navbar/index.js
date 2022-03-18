import NavButton from "../NavButton";
import "./style.css";

function Navbar() {
  return `
  ${NavButton('fa-bars', 'navbutton__menu')}
  <nav class='navlist' id='navlist'>
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul> 
  </nav>
  ${
    window.matchMedia('(prefers-color-scheme: light)').matches
      ? NavButton('fa-moon', 'navbutton__theme')
      : NavButton('fa-sun', 'navbutton__theme')
  }

     `;
}

export default Navbar;