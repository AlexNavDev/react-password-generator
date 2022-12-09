export default function generator(range, array, options, capitalize = false) {
  const RANGE = Number(range);
  const password = [];
  const regexLowerCase = /[a-z\u00f1]/;
  const regexUpperCase = /[A-Z\u00d1]/;
  const regexNumbers = /[0-9]/;
  const regexSymbols = /[- . / ! ¡ ¿ ? * _ # % &]/;
  const lowercase = [
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
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbols = [".", "/", "!", "¡", "¿", "?", "*", "-", "_", "#", "%", "&"];

  let randomLowerCase = Math.floor(Math.random() * lowercase.length);

  let randomUpperCase = Math.floor(Math.random() * lowercase.length);

  let randomNumber = Math.floor(Math.random() * 10);

  let randomSymbol = Math.floor(Math.random() * symbols.length);

  for (let i = 0; i <= RANGE - 1; i++) {
    const RANDOM = Math.floor(Math.random() * array.length);
    password[i] = array[RANDOM];
  }

  if (options === "all" || (options === "all" && capitalize)) {
    if (capitalize) {
      let capitalize = lowercase[randomUpperCase].toUpperCase();
      password[1] = lowercase[randomLowerCase];
      password[2] = numbers[randomNumber];
      password[3] = symbols[randomSymbol];

      let arrayCapitalize = [];

      for (let i = 1; i < password.length; i++) {
        arrayCapitalize.push(password[i]);
      }

      arrayCapitalize.sort(() => Math.random() - 0.5);
      arrayCapitalize.unshift(capitalize);
      return arrayCapitalize;
    }

    password[0] = lowercase[randomLowerCase];
    password[1] = lowercase[randomUpperCase].toUpperCase();
    password[2] = numbers[randomNumber];
    password[3] = symbols[randomSymbol];

    password.sort(() => Math.random() - 0.5);
    return password;
  }

  if (
    options === "lowercase-numbers-symbols" ||
    (options === "lowercase-numbers-symbols" && capitalize)
  ) {
    if (capitalize) {
      let capitalize = lowercase[randomUpperCase].toUpperCase();
      password[1] = lowercase[randomLowerCase];
      password[2] = numbers[randomNumber];
      password[3] = symbols[randomSymbol];

      let arrayCapitalize = [];

      for (let i = 1; i < password.length; i++) {
        arrayCapitalize.push(password[i]);
      }

      arrayCapitalize.sort(() => Math.random() - 0.5);
      arrayCapitalize.unshift(capitalize);
      return arrayCapitalize;
    }

    password[0] = lowercase[randomLowerCase];
    password[1] = numbers[randomNumber];
    password[2] = symbols[randomSymbol];

    password.sort(() => Math.random() - 0.5);
    return password;
  }

  if (
    options === "uppercase-numbers" ||
    (options === "uppercase-numbers" && capitalize)
  ) {
    if (capitalize) {
      let capitalize = lowercase[randomLowerCase].toUpperCase();
      password[1] = lowercase[randomUpperCase].toUpperCase();
      password[2] = numbers[randomNumber];

      let arrayCapitalize = [];

      for (let i = 1; i < password.length; i++) {
        arrayCapitalize.push(password[i]);
      }

      arrayCapitalize.sort(() => Math.random() - 0.5);
      arrayCapitalize.unshift(capitalize);
      return arrayCapitalize;
    }

    return password;
  }

  if (
    options === "uppercase-numbers-symbols" ||
    (options === "uppercase-numbers-symbols" && capitalize)
  ) {
    if (capitalize) {
      let capitalize = lowercase[randomLowerCase].toUpperCase();
      password[1] = lowercase[randomUpperCase].toUpperCase();
      password[2] = numbers[randomNumber];
      password[3] = symbols[randomSymbol];

      let arrayCapitalize = [];

      for (let i = 1; i < password.length; i++) {
        arrayCapitalize.push(password[i]);
      }

      arrayCapitalize.sort(() => Math.random() - 0.5);
      arrayCapitalize.unshift(capitalize);
      return arrayCapitalize;
    }

    password[0] = lowercase[randomUpperCase].toUpperCase();
    password[1] = numbers[randomNumber];
    password[2] = symbols[randomSymbol];

    password.sort(() => Math.random() - 0.5);
    return password;
  }

  if (
    options === "letters-numbers" ||
    (options === "letters-numbers" && capitalize)
  ) {
    if (capitalize) {
      let capitalize = lowercase[randomUpperCase].toUpperCase();
      password[1] = lowercase[randomLowerCase];
      password[2] = numbers[randomNumber];
      let arrayCapitalize = [];

      for (let i = 1; i < password.length; i++) {
        arrayCapitalize.push(password[i]);
      }

      arrayCapitalize.sort(() => Math.random() - 0.5);
      arrayCapitalize.unshift(capitalize);
      return arrayCapitalize;
    }

    password[0] = lowercase[randomUpperCase].toUpperCase();
    password[1] = lowercase[randomLowerCase];
    password[2] = numbers[randomNumber];

    password.sort(() => Math.random() - 0.5);
    return password;
  }

  if (
    options === "letters-symbols" ||
    (options === "letters-symbols" && capitalize)
  ) {
    if (capitalize) {
      let capitalize = lowercase[randomUpperCase].toUpperCase();
      let arrayCapitalize = [];
      password[1] = lowercase[randomLowerCase];
      password[2] = symbols[randomSymbol];

      for (let i = 1; i < password.length; i++) {
        arrayCapitalize.push(password[i]);
      }

      arrayCapitalize.sort(() => Math.random() - 0.5);
      arrayCapitalize.unshift(capitalize);
      return arrayCapitalize;
    }

    password[0] = lowercase[randomUpperCase].toUpperCase();
    password[1] = lowercase[randomLowerCase];
    password[2] = symbols[randomSymbol];

    password.sort(() => Math.random() - 0.5);
    return password;
  }

  if (options === "letters" || (options === "letters" && capitalize)) {
    if (capitalize) {
      let capitalize = lowercase[randomLowerCase].toUpperCase();
      password[0] = capitalize;

      return password;
    }

    if (!regexLowerCase.test(password)) {
      return onlyLowerCase(password);
    }

    if (!regexUpperCase.test(password)) {
      return onlyUpperCase(password);
    }
    return password;
  }

  if (
    options === "lowercase-numbers" ||
    (options === "lowercase-numbers" && capitalize)
  ) {
    let limit = password.length - 1;

    let randomTemp = Math.ceil(Math.random() * limit);
    let firstLetter = password[0];

    if (capitalize) {
      if (typeof firstLetter === "number" || typeof firstLetter === "string") {
        password[0] = lowercase[randomLowerCase].toUpperCase();
        password[randomTemp] = numbers[randomNumber];
        return password;
      }
    }

    if (!regexNumbers.test(password)) {
      return onlyNumber(password);
    }
    return password;
  }

  if (
    options === "lowercase-symbols" ||
    (options === "lowercase-symbols" && capitalize)
  ) {
    if (capitalize) {
      let limit = password.length - 1;

      let randomTemp = Math.ceil(Math.random() * limit);
      let capitalize = lowercase[randomLowerCase].toUpperCase();

      password[0] = capitalize;
      password[randomTemp] = symbols[randomSymbol];

      return password;
    }

    if (!regexSymbols.test(password)) {
      return onlySymbols(password);
    }
    return password;
  }

  if (
    options === "uppercase-symbols" ||
    (options === "uppercase-symbols" && capitalize)
  ) {
    if (capitalize) {
      let limit = password.length - 1;

      let randomTemp = Math.ceil(Math.random() * limit);
      let capitalize = lowercase[randomLowerCase].toUpperCase();

      password[0] = capitalize;
      password[randomTemp] = symbols[randomSymbol];
      return password;
    }

    if (!regexSymbols.test(password)) {
      return onlySymbols(password);
    }
    return password;
  }

  if (options === "lowercase" || (options === "lowercase" && capitalize)) {
    if (capitalize) {
      password[0] = lowercase[randomLowerCase].toUpperCase();
      return password;
    }

    return password;
  }

  if (options === "uppercase-numbers") {
    if (!regexNumbers.test(password)) {
      return onlyNumber(password);
    }
    return password;
  }

  if (options === "lowercase-symbols") {
    if (!regexSymbols.test(password)) {
      return onlySymbols(password);
    }
    return password;
  }

  if (options === "numbers-symbols") {
    if (!regexNumbers.test(password)) {
      return onlyNumber(password);
    }

    if (!regexSymbols.test(password)) {
      return onlySymbols(password);
    }
    return password;
  }

  if (options === "uppercase") {
    return password;
  }

  if (options === "numbers") {
    return password;
  }

  if (options === "symbols") {
    return password;
  }

  function onlyLowerCase(password) {
    let random = Math.floor(Math.random() * password.length);
    password[random] = password[random].toLowerCase();
    return password;
  }

  function onlyUpperCase(password) {
    let random = Math.floor(Math.random() * password.length);
    password[random] = password[random].toUpperCase();
    return password;
  }

  function onlyNumber(password) {
    let random = Math.floor(Math.random() * password.length);
    let numbers = Math.floor(Math.random() * 10);

    let replace = password
      .join("")
      .replace(password[random], numbers)
      .split("");

    return replace;
  }

  function onlySymbols(password) {
    const symbols = [
      ".",
      "/",
      "!",
      "¡",
      "¿",
      "?",
      "*",
      "-",
      "_",
      "#",
      "%",
      "&",
    ];

    let random = Math.floor(Math.random() * password.length);
    let randomSymbol = Math.floor(Math.random() * symbols.length);
    let symbol = symbols[randomSymbol];
    let replace = password.join("").replace(password[random], symbol).split("");

    return replace;
  }
}
