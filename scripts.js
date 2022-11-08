//declare global variables
const size = slider.value;

//create document references
const container = document.querySelector('.container');

//loop through columns based on user input of columns and rows; nest for loops
//VERY PSEUDO
function makeBox() {
    let gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
}

function makeRow() {    
    
    for(let i = 0; i < size; i++){

    }
    const rows = 
}

function makeGrid() {
    for(let i = 0; i < size; i++){
       let row = makeRow();
    }
}

//create nodelist and array from nodelist for boxes
const gridItems = document.querySelectorAll('.gridItem');
const gridArray = [...gridItems];

//listener on grid elements to add class on hover
// put this in a function?
gridArray.forEach((box) => box.addEventListener('hover', () => {
    // what do I want it to do when I hover...
    box.classList.add('boxOn');
}));

//function to reset page
function reset() {

}

//slider controls
const slider = document.querySelector("slider-range");
const output = document.querySelector("slider-setting");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}