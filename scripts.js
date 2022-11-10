//create document references
const container = document.querySelector('.grid-container');
const clickZone = document.querySelector('.container');

//no draw until click the container, click the container to turn off draw
let drawEnable = false;
clickZone.addEventListener('click', () => {
    if(!drawEnable){
        drawEnable = true;
    } else if(drawEnable){
        drawEnable = false;
    }
});
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetFill);

//reference selection from dropdown for color
const fillOption = document.querySelector('.dropdown');
let fillStyle = 'black';
fillOption.addEventListener('change', (event) => {
    fillStyle = event.target.value;
});

//slider controls
const slider = document.querySelector(".slider");
const output = document.querySelector(".slider-setting");
output.textContent = `Grid size: ${slider.value}`; // Display the default slider value

//function to style boxes based on chosen fillStyle
function styleBox(element) {
  if (drawEnable) {
    let styleContent;
      if(fillStyle === 'black') {
          styleContent = 'background-color: black; border: 1px solid black;';
      } else if(fillStyle === 'random') {
          let tempColor = getRandomColor();
          styleContent = `background-color: #${tempColor}; border-color: #${tempColor}`;
      } else if(fillStyle === 'gray') { 
          let currentStyle = getComputedStyle(element);
          let currentRGB = currentStyle.getPropertyValue('background-color');
          let currentRed = currentRGB.slice(4, 7);
          let currentBrightness = parseInt(currentRed);
          currentBrightness -= 25;
          styleContent = `background-color: rgb(${currentBrightness}, ${currentBrightness}, ${currentBrightness}); 
          border-color: rgb(${currentBrightness}, ${currentBrightness}, ${currentBrightness});`
          }
    element.setAttribute('style', styleContent);
  }}

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

function getRandomColor() {
    let randNum = Math.floor(Math.random()*16777215);
    return parseInt(randNum).toString(16);
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
        styleBox(box);
        }
    ))
}

//function to clear nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resetFill() {
    removeAllChildNodes(container);
    makeGrid();
    drawEnable = false;
}