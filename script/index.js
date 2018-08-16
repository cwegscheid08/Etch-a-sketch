let content = document.querySelector("#container");

function createDivs(row, columns) {
	rows = createDivs.arguments[0];
	columns = createDivs.arguments[1];
	const box = document.createElement("div");
	let grid;
	for(i = 0; i <= +rows; i++) {
		console.log(i);
		//grid = box.repeat(i);
	}

	content.appendChild('box');
}

//`module.exports = createDivs;