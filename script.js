// Assignment code here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '-', '=', '?'];
var desiredLength = "";

function generatePassword() {

var chosenChars = [];

var desiredLength = prompt('How many characters would you like your password to be?');


  while(desiredLength < 8 || desiredLength > 128) {
    alert("Must choose a number between 8-128");
    var desiredLength = prompt('How many characters would you like your password to be?');
  }

if (confirm('Would you like to include lowercase letters?')) {
   chosenChars = chosenChars.concat(lowerCase)
}

if (confirm('Would you like to include uppercase letters?')) {
   chosenChars = chosenChars.concat(upperCase)
}

if (confirm('Would you like to include numbers?')) {
  chosenChars = chosenChars.concat(numbers)
}

if (confirm('Would you like to include symbols?')) {
  chosenChars = chosenChars.concat(symbols)
}

var newPassword = ""

for (var i = 0; i < desiredLength; i++) {
  newPassword = newPassword + chosenChars[Math.floor(Math.random() * chosenChars.length)];
  console.log(newPassword)

}
return newPassword;
};

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