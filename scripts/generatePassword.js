import {
	arrayOptions,
	lettersUpperCase,
	lettersLowerCase,
	symbols,
	numbers
} from "../data/strings";

const generatePassword = (options) => {
  const passwordArray = [];
  let {
    characterLenght,
    hasLowercase,
    hasUppercase,
    hasNumbers,
    hasSymbols,
  } = options;
	
  for (let i = 0; i < characterLenght; i++) {
		if(hasLowercase) {
			passwordArray.push(lettersLowerCase[Math.floor(Math.random() * lettersLowerCase.length)])
			hasLowercase = false;
		}else if(hasUppercase) {
			passwordArray.push(lettersUpperCase[Math.floor(Math.random() * lettersUpperCase.length)])
			hasUppercase = false;
		}else if(hasNumbers) {
			passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)])
			hasNumbers = false;
		}else if(hasSymbols) {
			passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)])
			hasSymbols = false
		} else {
			passwordArray.push(arrayOptions[Math.floor(Math.random()*arrayOptions.length)])			
		}
	}

	const password = passwordArray.join('')

  return password;
};

export default generatePassword;
