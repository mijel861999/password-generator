const lettersLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const lettersUpperCase = lettersLowerCase.map((letter) => letter.toUpperCase());

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const symbols = [
  "<",
  ">",
  "!",
  "#",
  "$",
  "%",
  "&",
  "/",
  "(",
  ")",
  "=",
  "?",
  "¡",
];

const arrayOptions = [...lettersLowerCase, ...lettersUpperCase, ...numbers, ...symbols];

export { lettersLowerCase, lettersUpperCase, numbers, symbols, arrayOptions };
