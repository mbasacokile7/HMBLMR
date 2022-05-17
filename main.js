// Create  variables that assigns the acronym for HMBLMR
const actualName_1 = "Hold My Beer Let Me Rap"
const actualName_2 = "Hold my beer let me rap"
const actualName_3 = "hold my beer let me rap"

//Create a variable to store input element content using DOM
let inputContent = document.getElementById("input-el");

//Create a varibale to hold Form Section Object

const formEl = document.querySelector(".Competition-Form");

//Create a variable to change the landing-Page Section object

const  landEl = document.getElementById("Landing-Page")

// Variable for Pages/Different Section
const pages = document.querySelectorAll(".page");

// Variable of translating the div
const translateAmount = 100;

// Translation Variable
let translate = 0

let translation = translate += translateAmount

// Create a function that checks if the answer is correct.
function submit_fn(){
  if (inputContent.value === actualName_1 ||inputContent.value === actualName_2||inputContent.value === actualName_3){
    //alert("Well Done You have won some merch!")
    //console.log(inputContent.value)
    formEl.style.display = "flex";
    formEl.style.transform = "translateY(${translation})"
    landEl.style.display = "none";
    //formEl.style.zIndex = "2";
    
  }
  else{
    alert("Not Quite, Try Again")
  }

  
}

// ---------------------------------- Catalog Section ---------------------------------- //

// ----------------- DYNAMICALLY LOADING IMAGES ----------------------------------------//

// Album Images


const albumImages = ["MusicImages/Albums/SBC.jpg", "MusicImages/Albums/FMC.jpg", "MusicImages/Albums/imbtL.jpg" ]

let albumEl = document.querySelector(".albums")

let imagesBody

albumEl.style.display = "flex";

for (let i=0; i < albumImages.length ; i++){
  console.log(albumImages[i])

  imagesBody = `
                <div class = "album-image">
                <img src = ${albumImages[i]} alt  = "album_image_${i}" width = "300" height = "300">
                </div> 
                `
  albumEl.innerHTML += imagesBody
}

// EPs Images

const epImages = ["MusicImages/EPs/P25.jpg", "MusicImages/EPs/PT.jpg"]

let epEl = document.querySelector(".eps")

let imagesBody_2

epEl.style.display = "flex";

for (let i=0; i < epImages.length ; i++){
  //console.log(epImages[i])

  imagesBody_2 = `
                <div class = "ep-image">
                <img src = ${epImages[i]} alt  = "ep_image_${i}" width = "300" height = "300">
                </div> 
                `
  epEl.innerHTML += imagesBody_2
}

// Singles Images

const singleImages = ["MusicImages/Singles/UPPER.ECHELON..jpg", "MusicImages/Singles/Contemplations.jpg", "MusicImages/Singles/TLU.jpg", "MusicImages/Singles/Redemption25.jpg", "MusicImages/Singles/Winter.jpg", "MusicImages/Singles/OFF.jpg", "MusicImages/Singles/TheSummary.jpg"]

let singlesEl = document.querySelector(".singles")

let imagesBody_3

singlesEl.style.display = "flex";

for (let i=0; i < singleImages.length ; i++){
  //console.log(singleImages[i])

  imagesBody_3 = `
                <div class = "singles-image">
                <img src = ${singleImages[i]} alt  = "single_image_${i}" width = "300" height = "300">
                </div> 
                `
  singlesEl.innerHTML += imagesBody_3
}




 

