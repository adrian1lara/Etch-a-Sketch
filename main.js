
const container = document.getElementById('container');

function newGrid() {
    const squarePerSide = prompt('How many squares per side?(max 100)');

    const numSquares = parseInt(squarePerSide);
    if (numSquares < 1 || numSquares > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    container.innerHTML = '';

    const squareSize = 100 / numSquares;

    for (let i = 0; i < numSquares * numSquares; i++) {
        const div = document.createElement('div');
        div.className = 'grid-square';
        div.style.width = `${squareSize}%`;
        div.style.height = `${squareSize}%`;
        

        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'blue';
        })

        div.addEventListener('mouseleave', () => {
            div.style.backgroundColor = 'lightgray';
        })

        container.appendChild(div);
    }
}
