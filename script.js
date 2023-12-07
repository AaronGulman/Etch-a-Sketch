
// const grid = document.createElement('div')
// grid.setAttribute('class','myClass');
// document.body.appendChild(grid);



// let rows = document.getElementById('gridRow');
// let cells = document.getElementById('cell');




// function defaultGrid(){
// 	makeRows(16);
// 	makeColumns(16);
// }

// function makeRows(rowNum) {
// 	for (r = 0; r < rowNum; r++){
// 		let row = document.createElement('div');
// 		myClass.appendChild(row).className ='gridRow';
// 	}
// }

// function makeColumns(cellNum){
// 	for (i = 0; i < rows.length; i++){
// 		for(j = 0; j < cellNum; j++ );{
// 	let column = document.createElement('div');
// 	rows[j].appendChild(column).className='cell';
// 	};
// };
// }

const body = document.querySelector('body');
body.style.background = 'linear-gradient(to left, #fc466b, #3f5efb)'


const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'mainContainer');
document.body.appendChild(mainContainer);
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.alignItems = 'center';
mainContainer.style.justifyContent = 'center';
mainContainer.style.width = '300px'
mainContainer.style.height = '200px'
mainContainer.style.marginTop = '20%'
mainContainer.style.marginLeft = '15%'
mainContainer.style.background ='linear-gradient(to right, #8e2de2, #4a00e0)'
mainContainer.style.boxShadow = '2px 4px 5px 6px rgba(230,0,0)'







const btn = document.createElement('button');
btn.setAttribute('class', 'newGrid');
mainContainer.appendChild(btn);
btn.textContent = 'New Grid';
btn.style.display ='flex';
btn.style.background = 'rgba(0,0,0)';
btn.style.color = '#ffffff';
btn.style.border = '2 px solid #ffffff';
btn.style.boxShadow = '1px 3px 5px rgba(255,0,255,0.4)';
btn.style.padding = '20px 10px'











const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);
container.style.top = '30px';
container.style.fontSize = '0';
container.style.margin = 'auto';
container.style.height = '600px';
container.style.width = '600px';
container.style.padding = '0';
container.style.border = 'none';
container.style.display = 'flex';
container.style.flexDirection = 'column'
container.style.alignItems = 'center'
container.style.justifyContent = 'center'
container.style.marginTop = '10%'
container.style.marginLeft = '35%'
container.style.position = 'absolute'
container.style.background = 'linear-gradient(red, orange)'







function newGrid(x) {
	for (let r = 0; r < x; r++) {
	    let row = document.createElement('div');
	    row.style.display = 'flex'; // Add this line
	    container.appendChild(row);
    
	    for (let c = 0; c < x; c++) {
		let gridElement = document.createElement('div');
		gridElement.setAttribute('class', 'grid');
		row.appendChild(gridElement);
		gridElement.style.width = 550 / x + 'px';
		gridElement.style.height = 550 / x + 'px';
		gridElement.style.border = '1px solid #000';
		gridElement.style.backgroundColor = 'white'
		
		
	    }
	}
}
	
    let gridElements = document.querySelectorAll('.grid');
    gridElements.forEach((element) => {
        element.style.width = 960 / x + 'px';
        element.style.height = 960 / x + 'px';
    });


function resetGrid() {
    let gridElements = document.querySelectorAll('.grid');
    gridElements.forEach((element) => {
        element.remove();
    });
}

function refreshGrid() {
    let z = prompt('How big do you want the grid to be?');
    resetGrid();
    newGrid(z);
}

document.addEventListener('DOMContentLoaded', function () {
    newGrid(16);

    container.addEventListener('mouseover', function (event) {
        if (event.target.classList.contains('grid')) {
            event.target.style.backgroundColor = 'black';
        }
    });

    btn.addEventListener('click', function () {
        refreshGrid();
    });
});


