const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const passwordGeneratorForm = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwordDisplay');
const uppercase_character_codes = arrayFromLowToHigh(65,90);
const lowercase_character_codes = arrayFromLowToHigh(97,122);
const number_character_codes = arrayFromLowToHigh(48,57);
const symbol_character_codes = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126));
characterAmountNumber.addEventListener('input',syncCharacterAmount);
characterAmountRange.addEventListener('input',syncCharacterAmount);
passwordGeneratorForm.addEventListener('submit',event => {
     event.preventDefault();
     const characterAmount = characterAmountNumber.value;
     const includeUppercase = includeUppercaseElement.checked;
     const includeNumbers = includeNumbersElement.checked;
     const includeSymbols = includeSymbolsElement.checked;
     const password = generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols);
     passwordDisplay.innerText = password;
});
function generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols){
     let characterCodes = lowercase_character_codes;
     if(includeUppercase){
          characterCodes = characterCodes.concat(uppercase_character_codes);
     }
     if(includeSymbols){
          characterCodes = characterCodes.concat(symbol_character_codes);
     }
     if(includeNumbers){
          characterCodes = characterCodes.concat(number_character_codes);
     }
     const passwordCharacters = [];
     for(let i=0;i<characterAmount;i++){
          const characterCode = characterCodes[Math.floor(Math.random() * characterCodes.length)];
          passwordCharacters.push(String.fromCharCode(characterCode));
     }
     return passwordCharacters.join('');
}
function arrayFromLowToHigh(low,high){
     const array = [];
     for(let i=low;i<=high;i++){
          array.push(i);
     }
     return array;
}
function syncCharacterAmount(event){
     const value = event.target.value;
     characterAmountNumber.value = value;
     characterAmountRange.value = value;
}