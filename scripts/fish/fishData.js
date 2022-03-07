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
    },
    {
        species: "Clown Fish",
        length: 18,
        location: "Pensacola, FL",
        saltwater: false,
        image: "clownFish.jpg",
        name: "Nemo",
        diet: "Hot Dogs",
    },
    {
        species: "Puffer Fish",
        length: 20,
        location: "Honolulu, HI",
        saltwater: true,
        image: "pufferFish.jpg",
        name: "Mrs. Puff",
        diet: "Sea Sponges",
    }
]

export const getFish = () => {
    return fishCollection
}


// returns fish that have a length divisable by 3 in new array
export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    for (const obj of fishCollection) {
        if (obj.length % 3 === 0) {
            holyFishArray.push(obj)
        }
    }
    return holyFishArray
}

// console.log(getMostHolyFish())

// returns fish that have a length divisable by 5 in new array
export const getSoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiersArray = []

    for (const obj of fishCollection) {
        if (obj.length % 5 === 0 && obj.length % 3 !== 0) {
            soldiersArray.push(obj)
        }
    }
    return soldiersArray
}

// console.log(getSoldierFish())

// returns fish that have a length not divisable by 3 or 5 in new array
export const getUnworthy = () => {
    // Any fish not a multiple of 3 or 5
    const unworthyArray = []

    for (const obj of getFish()) {
        if (obj.length % 3 !== 0 && obj.length % 5 !== 0) {
            unworthyArray.push(obj)
        } 
    }

    return unworthyArray
}

// console.log(getUnworthy())