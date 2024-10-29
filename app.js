const currentPath = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(navLink => {
  const linkPath = navLink.getAttribute("href");
  
  if (linkPath === currentPath) {
    navLink.classList.add("active");
  }

  console.log(linkPath);
})

console.log(navLinks);
