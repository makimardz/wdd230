const menubutton = document.querySelector("header button");
const mynav = document.querySelector("nav");

menubutton.addEventListener("click", () => {
	mynav.classList.toggle("open")
})