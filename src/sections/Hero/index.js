import "./style.css";
import avatar from '../../assets/images/avatar.png'

function Hero() {
  return `
  <section class="hero">
    <div class='content-box-text'>
      <h1>
        Hey, I'm Gabriela! <br>
        A frontend developer.
      </h1>
      <h2>Working with ReactJS, but, always learning something new.</h2>
    </div>
    <div class="content-box-avatar">
      <img src=${avatar} alt='Self-avatar (Memoji)' />    
    </div>
    <div class="content-box-socials">
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-github-alt"></i>
      <i class="fa-solid fa-paper-plane"></i>
      <i class="fa-solid fa-envelope"></i>
    </div>
  </section>
  `;
}

export default Hero;
