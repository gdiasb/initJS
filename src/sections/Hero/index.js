import "./style.css";
import Avatar from '../../assets/images/avatar.png'

function Hero() {
  return `
  <section class="hero">
    <div class='content-box-text'>
      <h1>
        Hey, I'm Gabriela! <br>
        A frontend developer.
      </h1>
      <h2>Mastering ReactJS, but, always learning something new.</h2>
    </div>
    <div class="content-box-avatar">
      <img src=${Avatar} alt='Self-avatar (Memoji)' />    
    </div>
    <div class="content-box-socials">
      <a href="https://twitter.com/gdiasbm">
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a href="https://github.com/gdiasb">
        <i class="fa-brands fa-github-alt"></i>
      </a>
      <i class="fa-solid fa-paper-plane"></i>
      <i class="fa-solid fa-envelope"></i>
    </div>
  </section>
  `;
}

export default Hero;
