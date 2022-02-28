import { getLocation } from "./LocationData.js";
import { Location } from "./Location.js";

export const listofLocations = () => {
    const contentElement = document.querySelector(".locationList");
    const locationz = getLocation()

    let locationHTMLrepresentation = "";

    locationz.forEach(element => {
        locationHTMLrepresentation += Location(element)
    })

    contentElement.innerHTML += `${locationHTMLrepresentation}`
}