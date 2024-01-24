// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// adds a promt on screen to choose the number of characters to be used in the password thats going to be generated.
function generatePassword(){
var passwordSize=prompt("Enter password length between 8 and 128")
console.log(passwordSize)

if(passwordSize>=8 %% passwordSize <=128){

}
else{
  alert("Invalid Entry,Password length must be between 8 and 128")
}




}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);