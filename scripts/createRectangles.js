const rectangleContainer = document.getElementById("rectangle-container")

const createRectangles = (numbers) => {
	const rectangle = document.createElement("div") 
	rectangle.classList.add("rectangle")

	for(let i = 0; i < numbers; i++) {
		rectangleContainer.appendChild(rectangle)
	}
};

const removeRectangles = () => {
	rectangleContainer.removeChild(rectangleContainer.lastChild)	
}

export { 
	createRectangles,
	removeRectangles
}
