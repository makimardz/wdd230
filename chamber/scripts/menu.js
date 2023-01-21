const menubutton = document.querySelector("header button");
const navi = document.querySelectorAll("nav");
// menuitems will be a Node List of the list items

menubutton.addEventListener("click", () => {
	navi.classList.toggle("open")
});