
class RomanConverter {
  static CONVERTER = [
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M'],
    ['M', 'MM', 'MMM'],
  ];

  static MAP = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };


  static toRoman(num) {
    let deg = 0;
    let res = '';

    while(num > 0) {
      let n = Math.floor(num % 10);
      if (n > 0) {
        res = RomanConverter.CONVERTER[deg][n - 1] + res;
      }
      deg++;
      num = Math.floor(num / 10);
    }

    return res;
  }

  static fromRoman(roman) {
    let num = 0;

    for (let i = 0; i < roman.length; i++) {
      switch (roman[i]) {
        case 'M':
        case 'V':
        case 'L':
        case 'D':
          num = num + RomanConverter.MAP[roman[i]];
          break;
        case 'I':
          if (i + 1 < roman.length && ['V', 'X'].includes(roman[i + 1])) {
            num = num - RomanConverter.MAP['I'];
          } else {
            num = num + RomanConverter.MAP['I'];
          }
          break;
        case 'X':
          if (i + 1 < roman.length && ['L', 'C'].includes(roman[i + 1])) {
            num = num - RomanConverter.MAP['X'];
          } else {
            num = num + RomanConverter.MAP['X'];
          }
          break;
        case 'C':
          if (i + 1 < roman.length && ['D', 'M'].includes(roman[i + 1])) {
            num = num - RomanConverter.MAP['C'];
          } else {
            num = num + RomanConverter.MAP['C'];
          }
          break;
      }
    }
    return num;
  }
}

export default RomanConverter;