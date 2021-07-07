//constant strings to hold the different types of allowed characters
const numbers = "0123456789";
const upperLetters = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

var generateBtn = document.querySelector("#generate");

var charSet = "";
var passwordLength;

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  
  // capture the number of characters
  passwordLength = capturePasswordLength();
  
  //capture character set
  captureCharacterSet();

  //generate the password
  var password = generatePassword(passwordLength);

  //set the text content of the password text area to the generated password
  passwordText.textContent = password;
}


  function capturePasswordLength() // Function to set character length 8-128 per user input 
  {
    let passwordLength = prompt('Enter the number of characters ( 8 to 128 )');
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) // if outside the range or not a number, it will ask again
    {
      alert('Sorry you must enter a number between and including 8 to 128'); 
          passwordLength = prompt('Enter the number of characters ( 8 to 128 )'); 
    }
    return passwordLength;
  }


  
function captureCharacterSet()// Function to allow user to pick the different parameters for the password (numbers, caps, lower, special)
 {
   
  charSet = ""; // reset character set
  // what does the user want to use for the password
   if (confirm('Do you want to use numbers?')) {
    charSet += numbers;
  }
    if (confirm('Do you want to use UPPER case letters?')) {
    charSet += upperLetters;
  }
  if (confirm('Do you want ot use lower case letters?')) {
    charSet += lowerLetters;
  }
 
  if (confirm('Do you want to use special characters?')) {
    charSet += special;
  }
  if (charSet === "")// if nothing was picked, redo...
  {
      alert ("PLEASE enter at least one option - Hit Generate Password again to restart")
      return
  }
}

function getRandomInt(max) // random number generator between 0 and max number requested
{
  return Math.floor(Math.random() * max);
}

function generatePassword(passwordLength) // Function to generate the password with passwordLength as input
// It will then randomly place the character in the password set
{
  let password = ""; // resets password to ""
  for (let i = 0; i < passwordLength; i++) 
  {
    password = password += charSet.charAt(getRandomInt(charSet.length)); //creates the password
  }
  return password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);