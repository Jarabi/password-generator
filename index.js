// prettier-ignore
const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

// Fetch the DOM elements
const generateButton = document.querySelector('.generate-btn');
const passwordOne = document.querySelector('.password-one');
const passwordTwo = document.querySelector('.password-two');
const passwordLengthInput = document.getElementById('password-length');

generateButton.addEventListener('click', () => {
  // Clear output
  passwordOne.textContent = '';
  passwordTwo.textContent = '';
  let passwordLength = +passwordLengthInput.value;

  // Check password length

  if (passwordLength < 8 || passwordLength > 15) {
    passwordLengthInput.classList.remove('normal-input');
    passwordLengthInput.classList.add('error-input');
  } else {
    passwordLengthInput.classList.remove('error-input');
    passwordLengthInput.classList.add('normal-input');

    // Generate passwords
    for (let i = 0; i < passwordLength; i++) {
      passwordOne.textContent +=
        characters[Math.floor(Math.random() * characters.length)];
      passwordTwo.textContent +=
        characters[Math.floor(Math.random() * characters.length)];
    }
  }
});
