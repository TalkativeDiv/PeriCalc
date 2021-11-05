/*
---- Area Calculator ----

? Info:
? This program will calculate the area of a square and the perimeter of a square

* Code Summary:
* We first grab the Elements from the DOM
* We then register a event listener that that listens for
* when the button is clicked then we calculate the area & perimeter
*/
// DOM Elements
const button = document.querySelector('button');
const input = document.querySelector('input')
const lblArea = document.querySelector('.lbl-area')
const lblPerimeter = document.querySelector('.lbl-perimeter')
const loader = document.querySelector(".loader");
// Button Click
button.addEventListener('click', () => {
    let area = input.value * input.value;
    let perimeter = input.value * 4;
    lblArea.innerText = `A r e a : ${area}`
    lblPerimeter.innerText = `P e r i m e t e r : ${perimeter}`
})

// Preloader
window.addEventListener("load", function() { loader.className += " hidden"});