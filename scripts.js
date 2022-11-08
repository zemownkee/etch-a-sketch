//create document references
const container = document.querySelector('.grid-container');

//slider controls
const slider = document.querySelector(".slider");
const output = document.querySelector(".slider-setting");
output.textContent = `Grid size: ${slider.value}`; // Display the default slider value

//initialize grid
let size = 20;
makeGrid();
// Update the current slider value (each time you drag the slider handle)

slider.onchange = function() {
  output.textContent = `Grid size: ${this.value}`;
  size = slider.value;
  removeAllChildNodes(container);
  makeGrid();
}

//loop through columns based on user input of columns and rows; nest for loops
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
    const gridItems = document.querySelectorAll('.gridItem');
    const gridArray = [...gridItems];
    gridArray.forEach((box) => box.addEventListener('mouseover', () => {
        // what do I want it to do when I hover...
        box.classList.add('box-on');
}));}

//function to clear nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resetFill() {
    removeAllChildNodes(container);
    makeGrid();
}

