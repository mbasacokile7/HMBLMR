// Create  variables that assigns the acronym for HMBLMR
const actualName_1 = "Hold My Beer Let Me Rap"
const actualName_2 = "Hold my beer let me rap"
const actualName_3 = "hold my beer let me rap"

//Create a variable to store input element content using DOM
let inputContent = document.getElementById("input-el")

// Create a function that checks if the answer is correct.
function submit_fn(){
  if (inputContent.value === actualName_1 ||inputContent.value === actualName_2||inputContent.value === actualName_3){
    alert("Well Done You have won some merch!")
    console.log(inputContent.value)
  }
  else{
    alert("Not Quite, Try Again")
  }
}
