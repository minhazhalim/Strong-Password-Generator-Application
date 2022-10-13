const lengthSlider = document.querySelector('.password-length input');
const span = document.querySelector('.input-box span');
const passwordInput = document.querySelector('.input-box input');
const passwordIndicator = document.querySelector('.password-indicator');
const generateButton = document.querySelector('.generate-button');
const options = document.querySelectorAll('.option input');
const characters = {
     lowercase: 'abcdefghijklmnopqrstuvwxyz',
     uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
     numbers: '0123456789',
     symbols: '^!$%&|[](){}:;.,*+-#@<>~',
};
const generatePassword = () => {
     let staticPassword = "";
     let randomPassword = "";
     let excludeDuplicate = false;
     let passwordLength = lengthSlider.value;
     options.forEach(option => {
          if(option.checked){
               if(option.id !== 'exclude-duplicate' && option.id !== 'spaces'){
                    staticPassword += characters[option.id];
               }else if(option.id === 'spaces'){
                    staticPassword += `${staticPassword}`;
               }else{
                    excludeDuplicate = true;
               }
          }
     });
     for(let i = 0;i < passwordLength;i++){
          let randomCharacter = staticPassword[Math.floor(Math.random() * staticPassword.length)];
          if(excludeDuplicate){
               !randomPassword.includes(randomCharacter) || randomCharacter == " " ? randomPassword += randomCharacter : i--;
          }else{
               randomPassword += randomCharacter;
          }
     }
     passwordInput.value = randomPassword;
};
const updatePasswordIndicator = () => {
     passwordIndicator.id = lengthSlider.value <= 8 ? 'weak' : lengthSlider.value <= 16 ? 'medium' : 'strong';
};
const updateSlider = () => {
     document.querySelector('.password-length span').innerText = lengthSlider.value;
     generatePassword();
     updatePasswordIndicator();
};
updateSlider();
const copyPassword = () => {
     navigator.clipboard.writeText(passwordInput.value);
     span.innerText = 'check';
     span.style.color = '#4285F4';
     setTimeout(() => {
          span.innerText = 'copy_all';
          span.style.color = '#707070';
     },1500);
};
span.addEventListener('click',copyPassword);
generateButton.addEventListener('click',generatePassword);
lengthSlider.addEventListener('input',updateSlider);