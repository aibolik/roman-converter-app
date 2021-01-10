import validateValue from './validate-value';

const INVALID_ROMAN_NUMBERS = [
  'VIV',
  'VIIII',
  'CIC',
  'IICC',
  'ASD',
  'MMMMM',
  'MMMM',
  'MMMIM',
  'DCM',
  '123'
];

const INVALID_ARABIC_NUMBERS = [
  '4000',
  'as23',
  '123a',
  '99999',
  'MM',
  'XIX'
];

const VALID_ROMAN_NUMBERS = [
  'CXXIII',
  'MI',
  'MMMCMXCIX',
  'XXI',
  'MMXXI',
  'DLXIV',
  'CMXCVIII',
  'DLXIII',
  'MC',
  'MMM',
  'MMMIX',
  'CC',
];

const VALID_ARABIC_NUMBERS = [
  '1234',
  '512',
  '3999',
  '200',
  '3000',
  '1'
];

describe('validateValue', () => {

  describe('when converting from Arabic to Roman', () => {
    INVALID_ARABIC_NUMBERS.forEach((v) => {
      it(`should return false when converting '${v}'`, () => {
        expect(validateValue(v, true)).toEqual(false);
      });
    });

    VALID_ARABIC_NUMBERS.forEach(v => {
      it(`should return true when converting '${v}'`, () => {
        expect(validateValue(v, true)).toEqual(true);
      });
    })
  });

  describe('when converting from Roman to Arabic', () => {
    INVALID_ROMAN_NUMBERS.forEach((v) => {
      it(`should return false when converting '${v}'`, () => {
        expect(validateValue(v, false)).toEqual(false);
      });
    });

    VALID_ROMAN_NUMBERS.forEach(v => {
      it(`should return true when converting '${v}'`, () => {
        expect(validateValue(v, false)).toEqual(true);
      });
    })
  });

});