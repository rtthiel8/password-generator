// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*']
var chosenChars= []


//window.prompt("How long would you like your password to be?")
//var length = (Number(prompt("Choose password length between 8 - 128 characters."));


var lowercase = false;
if (confirm('Would you like to include lowercase letters?')) {
  lowercase = true;
}
if (true){
  var chosenChars = [...chosenChars, ...lowercase]
}

var uppercase = false;
if (confirm('Would you like to include uppercase letters?')) {
  uppercase = true;
}
if (true){
  var chosenChars = [...chosenChars, ...uppercase]
}

var numbers = false;
if (confirm('Would you like to include numbers?')) {
  numbers = true;
}
if (true){
  var chosenChars = [...chosenChars, ...numbers]
}

var symbols = false;
if (confirm('Would you like to include uppercase letters?')) {
  symbols = true;
}
if (true){
  var chosenChars = [...chosenChars, ...symbols]
}




//while password.length 

  
// while password is < desired length keep adding random characters from chosen types
// const lowerCase = Math.floor(Math.random() * lowerCase.length);
// console.log(random, lowerCase[random]);