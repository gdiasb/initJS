function NavButton(icon, id) {
  window.handleClick = (buttonPressed) => {
    function navIsOpen() {
      const navMenu = document.getElementById("navlist");
      navMenu.classList.toggle("navlist-open");
    }

    function changeTheme() {
      const iconToggle = buttonPressed.children[0];

      let colorStatus = document.body.className;

      if (colorStatus === "dark") {
        iconToggle.classList.replace("bi-sun", "bi-moon");
        document.body.classList.replace("dark", "light");
        console.log(document.getElementsByTagName("body")[0].classList);
      } else {
        iconToggle.classList.replace("bi-moon", "bi-sun");
        document.body.classList.replace("light", "dark");
        console.log(document.getElementsByTagName("body")[0].classList);
      }
    }

    buttonPressed.id === "navbutton__menu" ? navIsOpen() : changeTheme();
  };

  return `
    <button class=${id} id=${id} onclick='handleClick(this)'>
      <i class='bi ${icon}' ></i>
    </button>`;
}

export default NavButton;
