import { getTip } from "./tipData.js"
import { Tip } from "./tip.js"

export const listOfTips = () => {

    // Get a reference to the location on the DOM you want to display the list of fish
    const contentElement = document.querySelector(".tipList")
    // Get the fish array
    const tipz = getTip()
    // Declare a variable to hold on to the fish HTML representation
	let tipHTMLRepresentation = "";
    // Loop over the array of fish
	for (const oneTip of tipz) {
		tipHTMLRepresentation += Tip(oneTip);
	}
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `${tipHTMLRepresentation}`
}