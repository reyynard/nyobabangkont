// ===== Resize Navbar on Scroll =====
var navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky class to the tag a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// Product Colors
var pic = document.querySelector("#main-shoe");
var cyan =document.querySelector(".rendang");
var purple =document.querySelector(".basosapi");
var blue =document.querySelector(".kariayam");
var pink =document.querySelector(".ayambawang");
var green =document.querySelector(".sotomie");
var red =document.querySelector(".cabeijo");
const colors =document.querySelectorAll(".color");

// Store Product Info In Object
var info = [
	{
		src: "images/products/rendang.png"
	},
	{
		src: "images/products/basosapi.png"
	},
	{
		src: "images/products/kariayam.png"
	},
	{
		src: "images/products/ayambawang.png"
	},
	{
		src: "images/products/sotomie.png"
	},
	{
		src: "images/products/cabeijo.png"
	}
]

// Change Color
cyan.addEventListener("click", function(){
	pic.src = info[0].src
})
purple.addEventListener("click", function(){
	pic.src = info[1].src
})
blue.addEventListener("click", function(){
	pic.src = info[2].src
})
pink.addEventListener("click", function(){
	pic.src = info[3].src
})
green.addEventListener("click", function(){
	pic.src = info[4].src
})
red.addEventListener("click", function(){
	pic.src = info[5].src
})
// active color
function color(){
	colors.forEach(c => c.classList.remove('active'));
	this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));

// Navbar Toggler
const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle){
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// Closing Menu When Navlink is Clicked
const navLink = document.querySelectorAll(".nav-link");
function linkAction(){
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
