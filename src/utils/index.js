const ONLY_NUMBERS_REGEXP = new RegExp('^[0-9]+$');
const VALID_ROMAN_REGEXP = new RegExp('^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');

export const validateValue = (value, isArabicToRoman) => {

  if (isArabicToRoman) {
    return ONLY_NUMBERS_REGEXP.test(value);
  }
  return VALID_ROMAN_REGEXP.test(value);
}