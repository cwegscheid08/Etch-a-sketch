var grid;
var btn = document.querySelector('button');

btn.addEventListener('click', () => {
	grid = prompt("How big ya lookin? 1-64");
	location.reload();
	createDivs(grid, grid);
})

function createDivs(row, columns) {
	rows = createDivs.arguments[0];
	columns = createDivs.arguments[1];
	var container = document.querySelector("#container");
	container.classList.add("border");
	



	// MIGHT NEED TO BE REFORMATTED

	//POSSIBLY FIGURE INTO SINGLE FUNCTION TO CALL ON


	//MAKE THE BUTTON START RUN() WHICH WILL BUILD THE 
	//BOARD BASED ON THE SPECS OF A PROMPT/TEXTBOX.


	for(x = 0; x < +columns; x++) {
		const top = document.createElement("div");
		container.appendChild(top);
		
		for(i = 0; i <= +rows; i++) {
			const box = document.createElement("div");
			box.classList.add("rows", "box");
			box.addEventListener('mouseover', () => {
				box.classList.add("hover");
			})

			
			btn.addEventListener('click', () => {
				box.classList.remove("hover");
			});

			top.appendChild(box);

		}
		
		top.classList.add("columns", "box");
	}


}

//createDivs(64, 64);



//module.exports = createDivs;