const ONLY_NUMBERS_REGEXP = new RegExp('^[0-9]+$');
const VALID_ROMAN_REGEXP = new RegExp('^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
const MAX_ROMAN_NUM = 3999;

const validateValue = (value, isArabicToRoman) => {

  if (isArabicToRoman) {
    return ONLY_NUMBERS_REGEXP.test(value) && parseInt(value, 10) <= MAX_ROMAN_NUM;
  }
  return VALID_ROMAN_REGEXP.test(value);
}

export default validateValue;