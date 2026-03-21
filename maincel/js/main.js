const menuBtn = document.querySelector(".menu");
const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".nav a");

if (menuBtn && header) {
	menuBtn.addEventListener("click", (e) => {
		e.preventDefault();
		header.classList.toggle("open");
	});
}

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		header.classList.remove("open");
	});
});
