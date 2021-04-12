const resultElement = document.getElementById('result');
const clipboard = document.getElementById('clipboard');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numberElement = document.getElementById('number');
const symbolElement = document.getElementById('symbol');
const generateElement = document.getElementById('generate');
const randomFunction = {
     lowercase: getRandomLowercase,
     uppercase: getRandomUppercase,
     number: getRandomNumber,
     symbol: getRandomSymbol,
};
clipboard.addEventListener('click',() => {
     const textarea = document.createElement('textarea');
     const password = resultElement.innerText;
     if(!password){
          return;
     }
     textarea.value = password;
     document.body.appendChild(textarea);
     textarea.select();
     document.execCommand('copy');
     textarea.remove();
     alert('password copied to clipboard');
});
generateElement.addEventListener('click',() => {
     const hasLength = +lengthElement.value;
     const hasLowercase = lowercaseElement.checked;
     const hasUppercase = uppercaseElement.checked;
     const hasNumber = numberElement.checked;
     const hasSymbol = symbolElement.checked;
     resultElement.innerHTML = generatePassword(hasLowercase,hasUppercase,hasNumber,hasSymbol,hasLength);
});
function generatePassword(lowercase,uppercase,number,symbol,length){
     let generatePassword = '';
     const typesCount = lowercase + uppercase + number + symbol;
     const typesArray = [{lowercase},{uppercase},{number},{symbol}].filter(item => Object.values(item)[0]);
     if(typesCount === 0){
          return '';
     }
     for(let i=0;i<length;i+=typesCount){
          typesArray.forEach(type => {
               const functionName = Object.keys(type)[0];
               generatePassword += randomFunction[functionName]();
          });
     }
     const finalPassword = generatePassword.slice(0,length);
     return finalPassword;
}
function getRandomLowercase(){
     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUppercase(){
     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
     return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol(){
     const symbols = '!@#$%^~&+-*(){}[]=<>/,.';
     return symbols[Math.floor(Math.random() * symbols.length)];
}