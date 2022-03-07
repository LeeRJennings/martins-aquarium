import { getFish, getMostHolyFish, getSoldierFish, getUnworthy } from "./fishData.js"
import { fishHTML } from "./fish.js"

export const FishList = () => {

    // Get a reference to the location on the DOM you want to display the list of fish
    const contentElement = document.querySelector(".fishList")
    // Get the fish array
    // const fishes = getFish()
    const holyFish = getMostHolyFish()
    const soldierFish = getSoldierFish()
    const unworthyFish = getUnworthy()
    // Declare a variable to hold on to the fish HTML representation
	let fishHTMLRepresentation = "";
    // Loop over the array of fish
	// for (const oneThingFromTheSea of fishes) {
	// 	fishHTMLRepresentation += fishHTML(oneThingFromTheSea);
	// }

    for (const oneThingFromTheSea of holyFish) {
		fishHTMLRepresentation += fishHTML(oneThingFromTheSea);
	}

    for (const oneThingFromTheSea of soldierFish) {
		fishHTMLRepresentation += fishHTML(oneThingFromTheSea);
	}

    for (const oneThingFromTheSea of unworthyFish) {
		fishHTMLRepresentation += fishHTML(oneThingFromTheSea);
	}
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}

export const holyFishList = () => {

    // Get a reference to the location on the DOM you want to display the list of fish
    const contentElement = document.querySelector(".fishList")
    // Get the fish array
    const holyFish = getMostHolyFish()
    
    // Declare a variable to hold on to the fish HTML representation
	let fishHTMLRepresentation = "";
    // Loop over the array of fish
	for (const oneThingFromTheSea of holyFish) {
		fishHTMLRepresentation += fishHTML(oneThingFromTheSea);
	}
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}

export const soldierFishList = () => {

    // Get a reference to the location on the DOM you want to display the list of fish
    const contentElement = document.querySelector(".fishList")
    // Get the fish array
    const soldierFish = getSoldierFish()
    
    // Declare a variable to hold on to the fish HTML representation
	let fishHTMLRepresentation = "";
    // Loop over the array of fish
	for (const oneThingFromTheSea of soldierFish) {
		fishHTMLRepresentation += fishHTML(oneThingFromTheSea);
	}
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}

export const unworthyFishList = () => {

    // Get a reference to the location on the DOM you want to display the list of fish
    const contentElement = document.querySelector(".fishList")
    // Get the fish array
    const unworthyFish = getUnworthy()
    
    // Declare a variable to hold on to the fish HTML representation
	let fishHTMLRepresentation = "";
    // Loop over the array of fish
	for (const oneThingFromTheSea of unworthyFish) {
		fishHTMLRepresentation += fishHTML(oneThingFromTheSea);
	}
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}