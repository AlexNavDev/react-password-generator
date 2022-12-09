import generator from "./Regex";

export const generatorPassword = (options) => {
  const { range, lowercase, uppercase, number, symbols, capitalize } = options;

  const LOWERCASE = [
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
  const UPPERCASE = LOWERCASE.map((el) => el.toUpperCase());
  const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const SYMBOLS = [".", "/", "!", "¡", "¿", "?", "*", "-", "_", "#", "%", "&"];

  const LETTERS = [...LOWERCASE, ...UPPERCASE];

  const LETTERS_NUMBERS = [...LETTERS, ...NUMBERS];
  const LETTERS_SYMBOLS = [...LETTERS, ...SYMBOLS];

  const LOWERCASE_NUMBERS = [...LOWERCASE, ...NUMBERS];
  const LOWERCASE_SYMBOLS = [...LOWERCASE, ...SYMBOLS];

  const UPPERCASE_NUMBERS = [...UPPERCASE, ...NUMBERS];
  const UPPERCASE_SYMBOLS = [...UPPERCASE, ...SYMBOLS];

  const NUMBERS_SYMBOLS = [...NUMBERS, ...SYMBOLS];

  const LOWERCASE_NUMBERS_SYMBOLS = [...SYMBOLS, ...LOWERCASE_NUMBERS];
  const UPPERCASE_NUMBERS_SYMBOLS = [...SYMBOLS, ...UPPERCASE, ...NUMBERS];

  const LETTERS_NUMBERS_SYMBOLS = [...NUMBERS, ...LETTERS, ...SYMBOLS];

  if (lowercase && uppercase && number && symbols) {
    return generator(range, LETTERS_NUMBERS_SYMBOLS, "all", capitalize);
  }

  if (lowercase && uppercase && number) {
    return generator(range, LETTERS_NUMBERS, "letters-numbers", capitalize);
  }

  if (lowercase && uppercase && symbols) {
    return generator(range, LETTERS_SYMBOLS, "letters-symbols", capitalize);
  }

  if (lowercase && number && symbols) {
    return generator(
      range,
      LOWERCASE_NUMBERS_SYMBOLS,
      "lowercase-numbers-symbols",
      capitalize
    );
  }

  if (uppercase && number && symbols) {
    return generator(
      range,
      UPPERCASE_NUMBERS_SYMBOLS,
      "uppercase-numbers-symbols",
      capitalize
    );
  }

  if (lowercase && uppercase) {
    return generator(range, LETTERS, "letters", capitalize);
  }

  if (lowercase && number) {
    return generator(range, LOWERCASE_NUMBERS, "lowercase-numbers", capitalize);
  }

  if (lowercase && symbols) {
    return generator(range, LOWERCASE_SYMBOLS, "lowercase-symbols", capitalize);
  }

  if (uppercase && symbols) {
    return generator(range, UPPERCASE_SYMBOLS, "uppercase-symbols", capitalize);
  }

  if (uppercase && number) {
    return generator(range, UPPERCASE_NUMBERS, "uppercase-numbers", capitalize);
  }

  if (number && symbols) {
    return generator(range, NUMBERS_SYMBOLS, "numbers-symbols");
  }

  if (lowercase) {
    return generator(range, LOWERCASE, "lowercase", capitalize);
  }

  if (uppercase) {
    return generator(range, UPPERCASE, "uppercase");
  }

  if (number) {
    return generator(range, NUMBERS, "numbers");
  }

  if (symbols) {
    return generator(range, SYMBOLS, "symbols");
  }
};
