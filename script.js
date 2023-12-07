
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

const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'mainContainer');
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.alignItems = 'center';
mainContainer.style.justifyContent = 'center';
document.body.appendChild(mainContainer);


const btn = document.createElement('button');
btn.setAttribute('class', 'newGrid');
mainContainer.appendChild(btn);
btn.textContent = 'New Grid';
btn.style.display ='absolute';
btn.style.marginLeft = '25%'
btn.style.marginTop = '10%'




const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);
container.style.top = '30px';
container.style.outline = '2px solid #000';
container.style.fontSize = '0';
container.style.margin = 'auto';
container.style.height = '600px';
container.style.width = '600px';
container.style.padding = '0';
container.style.position = 'relative';
container.style.border = 'none';
container.style.display = 'flex';
container.style.flexDirection = 'column'
container.style.alignItems = 'center'
container.style.justifyContent = 'center'
container.style.margin = 'auto'







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


