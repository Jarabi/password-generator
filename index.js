// prettier-ignore
const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

// Fetch the DOM elements
const passwordLengthInput = document.getElementById('password-length');
const excludeNumbersCheck = document.getElementById('x-numbers');
const excludeSpecialChars = document.getElementById('x-special-chars');
const generatePasswordBtn = document.querySelector('.generate-btn');
const passwordTexts = document.querySelectorAll('.password-text');
let password = '';

// ++++++++++++++ Add event listeners ++++++++++++++++++++//

generatePasswordBtn.addEventListener('click', () => {
  clearPasswords();

  if (checkPasswordLength(+passwordLengthInput.value)) {
    generatePasswords(+passwordLengthInput.value);
  }
});

passwordTexts.forEach((textDiv) => {
  textDiv.addEventListener('click', (e) => {
    password = e.target.textContent;

    if (!password) return;

    navigator.clipboard.writeText(password).then(() => {
      e.target.textContent = 'Copied!';
    });
  });

  textDiv.addEventListener('mouseleave', (e) => {
    if (textDiv.textContent !== 'Copied!') return;
    textDiv.textContent = password;
  });
});

// ++++++++++++++ Functions +++++++++++++++++++++++++++++//

/**
 * Clear all password texts
 * @returns {void}
 */
function clearPasswords() {
  passwordTexts.forEach((textDiv) => {
    textDiv.textContent = '';
  });
}

/**
 *
 * @param {number} passwordLength
 * @returns {boolean}
 */
function checkPasswordLength(passwordLength) {
  if (passwordLength < 8 || passwordLength > 15) {
    passwordLengthInput.classList.remove('normal-input');
    passwordLengthInput.classList.add('error-input');
    return false;
  } else {
    passwordLengthInput.classList.remove('error-input');
    passwordLengthInput.classList.add('normal-input');
    return true;
  }
}

/**
 *
 * @param {number} passwordLength
 * @returns {void}
 */
function generatePasswords(passwordLength) {
  let source = [...characters];

  if (excludeNumbersCheck.checked) {
    source = source.filter((char) => !/[0-9]/.test(char));
  }

  if (excludeSpecialChars.checked) {
    source = source.filter((char) => /[a-zA-Z0-9]/.test(char));
  }

  passwordTexts.forEach((textDiv) => {
    for (let i = 0; i < passwordLength; i++) {
      textDiv.textContent += source[Math.floor(Math.random() * source.length)];
    }
  });
}