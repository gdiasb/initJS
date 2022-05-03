import "./style.css";
import Avatar from '../../assets/images/avatar.png'

function Hero() {
  return `
  <section class="hero">
    <div class='content-box-text'>
      <h1>
        Hey, <br> I'm Gabriela, <br>
         a web developer.
      </h1>
      <h2>Mastering ReactJS, but, <span style="color: var(--dark-green); font-weight: 700">always</span> learning something new.</h2>
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
      <a href="https://t.me/diasgabriela">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="malito:gabrieladias@eq.ufrj.br">
        <i class="fa-solid fa-envelope"></i>
      </a>
    </div>
  </section>
  `;
}

export default Hero;
