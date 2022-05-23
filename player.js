//---------------------------------------------Player Section: The Heading -----------------------------------------//

const albumImages = ["MusicImages/Albums/SBC.jpg", "MusicImages/Albums/FMC.jpg", "MusicImages/Albums/imbtL.jpg" ]
const epImages = ["MusicImages/EPs/PT.jpg", "MusicImages/EPs/P25.jpg"]
const singleImages = ["MusicImages/Singles/UPPER.ECHELON..jpg", "MusicImages/Singles/Contemplations.jpg", "MusicImages/Singles/Redemption25.jpg", "MusicImages/Singles/Winter.jpg", "MusicImages/Singles/OFF.jpg", "MusicImages/Singles/TheSummary.jpg"]





//------------------------------------------ Album Objects------------------------------------------//

//SBC
const sbc = {
                title: "Sweet Black Child",
                image_path: albumImages[0],
                year: "2022"
}

//FMC
const fmc = {
                title: "For My. Conscience",
                image_path: albumImages[1],
                year: "2019"
}

//imbtL
const imbtL = {
                title: "...it must be the LOWS",
                image_path: albumImages[2],
                year: "2018"
}


let albumsData = [sbc, fmc, imbtL]

//------------------------------------------ EP Objects------------------------------------------//

// Price Tag Object
const pr = {
            title: "price tag",
            image_path: epImages[0],
            year: "2020"
}

// Planet 25 Object
const p25 = {
    title: "planet 25",
    image_path: epImages[1],
    year: "2019"
}

let = epData = [pr, p25]

//------------------------------------------ Singles Objects------------------------------------------//

const uE = {
    title: "UPPER.ECHELON.",
    image_path: singleImages[0],
    year: "2021"
}

const ctmPn = {
    title: "Contemplations",
    image_path: singleImages[1],
    year: "2020"
}

const r25 = {
    title: "Redemption 25",
    image_path: singleImages[2],
    year: "2019"
}

const wntr = {
    title: "Winter",
    image_path: singleImages[3],
    year: "2019"
}

const off = {
    title: "Off",
    image_path: singleImages[4],
    year: "2019"
}

const theSum = {
    title: "The Summary",
    image_path: singleImages[5],
    year: "2018"
}

let singlesData = [uE, ctmPn, r25, wntr, off, theSum]


// Lets first get the album-art sorted:

console.log(albumsData[0].title)
//console.log(albumsData[0][0])
//console.log(albumsData[0][2])





let albumArt = document.querySelector(".album-art-0")

let albumPicture = `
                    <img src = ${albumsData[0].image_path} alt = "Sweet Black Child Image" width = "150" height="150">
                    `

albumArt.innerHTML = albumPicture;

let albumDescription = document.querySelector(".album-description-0")


let albumText = `
                <h2 class = "album-heading">${albumsData[0].title}</h2>
                <h3 class = "album-year">${albumsData[0].year}</h3>
                <p class = "album-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed blandit tortor. Aliquam a mauris arcu. Phasellus vel dapibus diam.</p>

                `

albumDescription.innerHTML = albumText;
                