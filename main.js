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

//const pages = document.querySelectorAll(".page");
    //const translateAmount = 100; 
    //let translate = 0;

    //slide = (direction) => {

      //direction === "next" ? translate -= translateAmount : translate += translateAmount;

      //pages.forEach(
        //pages => (pages.style.transform = `translateY(${translate}%)`)
      //);
    //}
