let input = document.querySelector(".input");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");


// 1. Convert to an arrow function.
const calculateWingstopAge = humanAge => {
 

  // 2. Declare a doggieAge variable and set it equal to the humanAge parameter multiplied by 7.

  let WingsAge = humanAge * 1;
  


  // 3. Update the result div's inner html to display the dog's age. Use string interpolation to create the message: "Wingstop is _________ years old!"
result.innerHTML = "Wingstop is " + WingsAge + " years old"
  
  
}



equalsButton.addEventListener("click", () => {

  // 4. Declare a userInput variable and set it equal to the value of the input. This needs to be a number, not a string! Be sure to place that inside our Number() method!
 let userInput = Number(input.value);

  // 5. Call the calculateWingstopAge function. Be sure to include the userInput variable as the parameter!
calculateWingstopAge(userInput);


})



// DO NOT TOUCH THIS CODE
clearButton.onclick = function() {
  input.value = "";
  result.innerHTML = "";

}