function NavButton(icon, id) {

  // O uso do window torna a função disponível no contexto global e para evitar a sobreposição de nomes se define em qual escopo (NavButton) a função handleClick se refere.
  window.NavButton = {};
  
  window.NavButton.handleClick = (buttonPressed) => {
    function navIsOpen() {
      const navMenu = document.getElementById("navlist");
      navMenu.classList.toggle("navlist-open");
    }

    function changeTheme() {
      const iconToggle = buttonPressed.children[0];

      let colorStatus = document.body.className;

      if (colorStatus === "dark") {
        iconToggle.classList.replace("fa-sun", "fa-moon");
        document.body.classList.replace("dark", "light");
        console.log(document.getElementsByTagName("body")[0].classList);
      } else {
        iconToggle.classList.replace("fa-moon", "fa-sun");
        document.body.classList.replace("light", "dark");
        console.log(document.getElementsByTagName("body")[0].classList);
      }
    }

    buttonPressed.id === "navbutton__menu" ? navIsOpen() : changeTheme();
  };

  return `
    <button class=${id} id=${id} onclick='window.NavButton.handleClick(this)'>
      <i class='fa ${icon}' style="font-size: x-large;"></i>
    </button>`;
}

export default NavButton;
