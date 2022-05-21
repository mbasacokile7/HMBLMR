//---------------------------------------------Player Section: The Heading -----------------------------------------//

const albumImages = ["MusicImages/Albums/SBC.jpg", "MusicImages/Albums/FMC.jpg", "MusicImages/Albums/imbtL.jpg" ]
const epImages = ["MusicImages/EPs/PT.jpg", "MusicImages/EPs/P25.jpg"]
const singleImages = ["MusicImages/Singles/UPPER.ECHELON..jpg", "MusicImages/Singles/Contemplations.jpg", "MusicImages/Singles/Redemption25.jpg", "MusicImages/Singles/Winter.jpg", "MusicImages/Singles/OFF.jpg", "MusicImages/Singles/TheSummary.jpg"]





// Put the album titles and year of release in an array
const album_title = ["Sweet Black Child", "For My. Conscience", "...it must be the LOWS"];
const album_year = ["2022", "2019", "2018"]

// Put the EP titles and year of release in an array
const ep_name = ["price tag", "Planet 25"];
const ep_year = ["2020", "2019"];

// Get the singles'and year of release titles in an array
const  singles_titles = ["UPPER.ECHELON.", "Contemplations", "Redemption 25", "Winter", "Off", "The Summary"];
const sinlges_year = ["2021", "2020", "2019", "2019", "2019", "2018"];

// Lets first get the album-art sorted:

let albumArt = document.querySelector(".album-art")

let albumPicture = `
                    <img src = ${albumImages[0]} alt = "Sweet Black Child Image" width = "150" height="150">
                    `

albumArt.innerHTML = albumPicture;

let albumDescription = document.querySelector(".album-description")

let albumText = `
                <h2 class = "album-heading">${album_title[0]}</h2>
                <h3 class = "album-year">${album_year[0]}</h3>
                <p class = "album-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed blandit tortor. Aliquam a mauris arcu. Phasellus vel dapibus diam.</p>

                `

albumDescription.innerHTML = albumText;
                