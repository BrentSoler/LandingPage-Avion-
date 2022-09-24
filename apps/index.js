const images = document.querySelector(".img-container");
const slant = document.querySelector(".slant");
const main = document.querySelector("#main");
const email = document.getElementById("email");
const helper = document.querySelector(".helper");

const sName = document.querySelector(".name");
const colorway = document.querySelector(".colorway");
const price = document.querySelector(".price");

let slide = 0;

const data = [
	{
		name: "Nike Air Max 1",
		price: "P 9,895",
		colorway: "Crepe Hemp",
		primary: "#5d4735",
		secondary: "#998061",
	},
	{
		name: "Air Jordan 3 Retro",
		price: "P 11,295",
		colorway: "Fire Red",
		primary: "#3F3738",
		secondary: "#C20028",
	},
	{
		name: "Nike Zoom Freak 4",
		price: "P 7,595",
		colorway: "Dark Marina Blue Pink Gaze",
		primary: "#3F3738",
		secondary: "#023859",
	},
];

carousellUp();

function carousellDown() {
	images.children[slide].classList.remove("animate-in");
	images.children[slide].classList.add("animate-out");

	if (slide === images.children.length - 1) {
		slide = 0;
		images.children[0].classList.remove("animate-out");
		images.children[0].classList.add("animate-in");
		slant.style.backgroundColor = data[0].secondary;
		sName.textContent = data[0].name;
		colorway.textContent = data[0].colorway;
		price.textContent = data[0].price;

		return;
	}

	images.children[slide + 1].classList.remove("animate-out");
	images.children[slide + 1].classList.add("animate-in");

	slant.style.backgroundColor = data[slide + 1].secondary;
	sName.textContent = data[slide + 1].name;
	colorway.textContent = data[slide + 1].colorway;
	price.textContent = data[slide + 1].price;

	slide += 1;
}

function carousellUp() {
	images.children[slide].classList.remove("animate-in");
	images.children[slide].classList.add("animate-out");

	if (slide === 0) {
		slide = images.children.length - 1;
		images.children[images.children.length - 1].classList.remove("animate-out");
		images.children[images.children.length - 1].classList.add("animate-in");
		slant.style.backgroundColor = data[images.children.length - 1].secondary;
		sName.textContent = data[images.children.length - 1].name;
		colorway.textContent = data[images.children.length - 1].colorway;
		price.textContent = data[images.children.length - 1].price;

		return;
	}

	images.children[slide - 1].classList.remove("animate-out");
	images.children[slide - 1].classList.add("animate-in");

	slant.style.backgroundColor = data[slide - 1].secondary;
	sName.textContent = data[slide - 1].name;
	colorway.textContent = data[slide - 1].colorway;
	price.textContent = data[slide - 1].price;

	slide -= 1;
}

function submitHandler(e) {
	const inputVal = email.value;

	if (!inputVal) {
		e.preventDefault();
		setHelper("Empty Field!");
		return;
	}

	clearHelper("");
}

function setHelper(msg) {
	helper.textContent = msg;
}
