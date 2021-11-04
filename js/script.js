/*
---- Area Calculator ----

? Info:
? This program will calculate the area of a square 

* Code Summary:
* We first grab the Elements from the DOM
* We then register a event listener that fires
* when the button is clicked and have a callback 
* function that fires when the button is clicked
* which calculates the area & perimeter
*/

const button = document.querySelector('button');
const input = document.querySelector('input')
const lblArea = document.querySelector('.lbl-area')
const lblPerimeter = document.querySelector('.lbl-perimeter')
const loader = document.querySelector(".loader");

button.addEventListener('click', () => {
let area = input.value * 2;
let perimeter = input.value * 4;
lblArea.innerText = `A r e a : ${area}`
lblPerimeter.innerText = `P e r i m e t e r : ${perimeter}`
})

// Preloader
window.addEventListener("load", function () {
     this.setTimeout(() => {
       loader.className += " hidden";
     }, 0) // class "loader hidden"
   });