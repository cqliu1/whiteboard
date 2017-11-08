// VAR

// reference to HTML elements
const whiteboard = document.querySelector("#whiteboard");
const sidebar = document.querySelector("#sidebar");
const mouseXSpan = document.querySelector("#mouse-x");
const mouseYSpan = document.querySelector("#mouse-y");
const offsetXSpan = document.querySelector("#offset-x");
const offsetYSpan = document.querySelector("#offset-y");
const lineWidthSpan = document.querySelector("#line-width-val");

// reference to input elements
const colorInput = document.querySelector("#color");
const lineWidthInput = document.querySelector("#line-width");
const clearBtn = document.querySelector("#clear");

// canvas
const context = whiteboard.getContext("2d");

// offsets
const offsetX = whiteboard.offsetLeft;
const offsetY = whiteboard.offsetTop;

// if holding down mouse
let dragging = false;

// if mouse is over canvas
let onCanvas = false;

// default context settings
whiteboard.height = window.innerHeight;
whiteboard.width = window.innerWidth - 332;
context.strokeStyle = "#000000";
context.lineJoin = "round";
context.lineWidth = "5";

offsetXSpan.textContent = offsetX;
offsetYSpan.textContent = offsetY;
lineWidthInput.value = context.lineWidth;
lineWidthSpan.textContent = context.lineWidth;

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
	context.save();
});

whiteboard.addEventListener("mouseover", (e) => {
	onCanvas = true;
	context.beginPath();
	context.moveTo(e.pageX - offsetX, e.pageY - offsetY);
});

whiteboard.addEventListener("mouseleave", (e) => {
	onCanvas = false;
});

colorInput.addEventListener("change", (e) => {
	context.strokeStyle = e.target.value;
});

lineWidthInput.addEventListener("input", (e) => {
	context.lineWidth = e.target.value;
	lineWidthSpan.textContent = e.target.value;
});

clearBtn.addEventListener("click", (e) => {
	context.clearRect(0,0,whiteboard.width, whiteboard.height);
});

// window.addEventListener("resize", (e) => {
// 	whiteboard.height = window.innerHeight;
// 	whiteboard.width = window.innerWidth * .8;
// 	context.restore();
// });

