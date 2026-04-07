/* MENU TOGGLE */
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "Close" : "Menu";
  });
}

/* THEME TOGGLE */
function setTheme(theme) {
	if (theme === 'default') {
	  document.body.removeAttribute('data-theme');
	} else {
	  document.body.setAttribute('data-theme', theme);
	}
}

/* RETAIN USER THEME PREFERENCE */
/* see if savedTheme exists and use it */
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
	document.body.setAttribute('data-theme', savedTheme);
}
/* set savedTheme */
function setTheme(theme) {
if (theme === 'default') {
	document.body.removeAttribute('data-theme');
	localStorage.removeItem('theme');
} else {
	document.body.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
}
}
