import RomanConverter from './roman-converter';

const ROMAN_TEST_CASES = [
  [123, 'CXXIII'],
  [1001, 'MI'],
  [3999, 'MMMCMXCIX'],
  [21, 'XXI'],
  [2021, 'MMXXI'],
  [564, 'DLXIV'],
  [998, 'CMXCVIII'],
  [563, 'DLXIII'],
  [1100, 'MC'],
  [3000, 'MMM'],
  [3009, 'MMMIX'],
  [200, 'CC'],
]

describe('RomanConverter', () => {

  describe('toRoman method', () => {

    ROMAN_TEST_CASES.forEach(([arabic, roman]) => {
      it(`should convert correctly ${arabic} to ${roman}`, () => {
        expect(RomanConverter.toRoman(arabic)).toEqual(roman);
      });
    });
  });

  describe('fromRoman method', () => {

    ROMAN_TEST_CASES.forEach(([arabic, roman]) => {
      it(`should convert correctly ${roman} to ${arabic}`, () => {
        expect(RomanConverter.fromRoman(roman)).toEqual(arabic);
      });
    });
  });

});