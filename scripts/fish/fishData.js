const fishCollection = [
    {
        species: "Yellow Tang",
        length: 15,
        location: "Honolulu, HI",
        saltwater: true,
        image: "bluefish.jpg",
        name: "Frodo",
        diet: "insects",
    },
    {
        species: "Sword Fish",
        length: 2.5,
        location: "Miami, FL",
        saltwater: true,
        image: "sf.jpg",
        name: "Sharpy",
        diet: "Dunkin Donuts",
    },
    {
        species: "Shark",
        length: 25,
        location: "Pensacola, FL",
        saltwater: true,
        image: "shark.jpg",
        name: "Bruce",
        diet: "Yellow Tang",
    }
]

export const getFish = () => {
    return fishCollection
}