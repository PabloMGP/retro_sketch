// Get the grid container element
let gridContainer = document.getElementById('grid-container');

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
  }
}

// Call the function with desired rows and columns
let rows = 40; // Adjust number of rows as needed
let cols = 40; // Adjust number of columns as needed
generateGrid(rows, cols);


document.addEventListener("DOMContentLoaded", () => {
    const scaleUp = document.querySelector(".button1");
    scaleUp.addEventListener("click", () => {
      let rows = 10;
      let cols = 10;
      generateGrid(rows, cols); // Call the generateGrid function with the updated rows and cols values
    });
  });
  