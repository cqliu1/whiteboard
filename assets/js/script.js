// VARS
const whiteboard = document.querySelector("#whiteboard");
const context = whiteboard.getContext("2d");

// default context settings
whiteboard.height = window.innerHeight;
whiteboard.width = window.innerWidth * .8;
context.strokeStyle = "#000000";
context.lineJoin = "round";
context.lineWidth = "5";

// reference to span elements
const mouseXSpan = document.querySelector("#mouse-x");
const mouseYSpan = document.querySelector("#mouse-y");
const offsetXSpan = document.querySelector("#offset-x");
const offsetYSpan = document.querySelector("#offset-y");

// offsets
const offsetX = whiteboard.offsetLeft;
const offsetY = whiteboard.offsetTop;

// if holding down mouse
let dragging = false;
let onCanvas = false;

offsetXSpan.textContent = offsetX;
offsetYSpan.textContent = offsetY;

// EVENT LISTENERS
whiteboard.addEventListener("mousedown", (e) => {
	dragging = true;
	context.beginPath();
	context.moveTo(e.pageX - offsetX, e.pageY - offsetY);
	mouseXSpan.textContent = e.pageX - offsetX;
	mouseYSpan.textContent = e.pageY - offsetY;
});

whiteboard.addEventListener("mousemove", (e) => {
	if(dragging && onCanvas) {
		mouseXSpan.textContent = e.pageX - offsetX;
		mouseYSpan.textContent = e.pageY - offsetY;
		context.lineTo(e.pageX - offsetX, e.pageY - offsetY);
		context.stroke();
	}
});

whiteboard.addEventListener("mouseup", (e) => {
	dragging = false;
});

whiteboard.addEventListener("mouseover", (e) => {
	onCanvas = true;
});

whiteboard.addEventListener("mouseleave", (e) => {
	onCanvas = false;
});