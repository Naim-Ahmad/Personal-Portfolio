function activeNavLink() {
  const navbarLinks = document.querySelectorAll("nav ul li a");
  const scrollPos = window.scrollY;
  const navBar = document.getElementById("navBar");
  const navPos = navBar.getBoundingClientRect("nav-bar").top;

  if (scrollPos > 250) {
    navBar.classList.add("bg-dark");
  } else {
    navBar.classList.remove("bg-dark");
  }

  navbarLinks.forEach((link) => {
    const section = document.querySelector(link.hash);

    if (
      scrollPos + 300 > section.offsetTop &&
      scrollPos + 300 < section.offsetTop + section.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

export default activeNavLink;
