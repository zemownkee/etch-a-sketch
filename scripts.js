//declare global variables
const size = 5;

//create document references
const container = document.querySelector('.grid-container');

//loop through columns based on user input of columns and rows; nest for loops
//VERY PSEUDO
function makeBox() {
    let gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    return gridItem;
}

function makeRow() {    
    const row = document.createElement('div');
    for(let i = 0; i < size; i++){
        row.append(makeBox());
    }
    row.classList.add('row');
    return row;
}

function makeGrid() {
    for(let i = 0; i < size; i++){
       container.append(makeRow());
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
const slider = document.querySelector("slider");
const output = document.querySelector("slider-setting");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}