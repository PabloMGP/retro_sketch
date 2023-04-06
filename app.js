window.addEventListener("DOMContentLoaded", (event) => {
});

let isMouseDown = false;

// Get the grid container element
let gridContainer = document.querySelector('.grid-container');

// Function to generate grid of squares
function generateGrid(rows, cols) {
  let squareSize = 100 / rows; // Adjust square size based on number of rows
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, ${squareSize}%)`;
  gridContainer.style.gridTemplateRows = `repeat(${rows}, ${squareSize}%)`;
  gridContainer.innerHTML = ''; // Clear existing squares

  for (let i = 0; i < rows * cols; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);
    square.style.userSelect = 'none';  // Prevents mouse(while down) from selecting the divs
  }
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mousedown', function () {
      isMouseDown = true;
      paint(square);
    });
    square.addEventListener("mouseover", function () {
      if (isMouseDown === true) {
        paint(square);
      }
    });
    square.addEventListener("mouseup", function () {
      isMouseDown = false;
    })  
  })
};

// Default grid
const defaultRows = 12;
const defaultCols = 12;
generateGrid(defaultRows, defaultCols);


let savedRows = defaultRows;
let savedCols = defaultCols;

generateGrid(savedRows, savedCols);

let reset_btn = document.querySelector(".reset-button");
reset_btn.addEventListener("click", () => {
  if (savedRows === defaultRows && savedCols === defaultCols) {
    // reset to default size
    generateGrid(defaultRows, defaultCols);
  } else {
    // reset to current size
    generateGrid(savedRows, savedCols);
  }
});

let select = document.querySelectorAll("select");
select.forEach(select => {
  select.addEventListener("change", () => {
    savedRows = parseInt(select.value);
    savedCols = parseInt(select.value);
    generateGrid(savedRows, savedCols);
  });
});


// Primary paint function
function paint(square) {
  square.style.backgroundColor = "blue";
}




