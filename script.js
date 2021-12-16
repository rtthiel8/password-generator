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
var chosenChars = []


if (confirm('Would you like to include lowercase letters?')) {
   chosenChars.push(lowercase)
}

if (confirm('Would you like to include uppercase letters?')) {
   chosenChars.push(uppercase)
}

if (confirm('Would you like to include numbers?')) {
  chosenChars.push(numbers)
}

if (confirm('Would you like to include symbols?')) {
  chosenChars.push(symbols)
}
console.log(chosenChars)

function randomChars(chosenChars) {
  return chosenChars[Math.floor(Math.random()*chosenChars.length)];
}

console.log(randomChars)

