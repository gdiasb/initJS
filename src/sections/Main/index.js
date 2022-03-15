import './style.css'
import Navbar from "../../components/Navbar";
import Hero from "../Hero";

function Main() {

  return `
  <section class="container">
    <header>
      ${Navbar()}
    </header>
    ${Hero()}
  </section>`;
}

export default Main;
