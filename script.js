
//Function to handle navbar

function navHandler() {
    const navbar = document.querySelector("[data-navbar]");
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const navToggleBtn = document.querySelector("[data-nav-toggler]");

    const navToggle = () => navbar.classList.toggle("active");

    navToggleBtn.addEventListener("click", navToggle);

    const navClose = () => navbar.classList.remove("active");

    navLinks.forEach((link) => {
        link.addEventListener("click", navClose);
    })
}

navHandler();
