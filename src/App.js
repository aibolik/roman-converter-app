import React, { useEffect, useState } from 'react';
import './App.css';

import RadioButton from './components/RadioButton';
import Input from './components/Input';

import { validateValue } from './utils';
import RomanConverter from './utils/roman-converter';

function App() {
  const [isArabicToRoman, setIsArabicToRoman] = useState(true);
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  useEffect(() => {
    setFromValue('');
  }, [isArabicToRoman]);

  const onChange = (e) => {
    setIsArabicToRoman(e.target.value === 'toRoman');
  }

  const onFromValueChange = (e) => {
    const v = e.target.value.toUpperCase();

    if (!v) {
      setFromValue('');
      setToValue('');
    }

    if (validateValue(v, isArabicToRoman)) {
      setFromValue(v);
      if (isArabicToRoman) {
        setToValue(RomanConverter.toRoman(parseInt(v, 10)));
      } else {
        setToValue(RomanConverter.fromRoman(v));
      }
    }
  }

  return (
    <main className="app-container">
      <h1 className="">
        Roman Converter
      </h1>
      <div className="conversion-selector">
        <RadioButton id="id-1" name="conversion" label="Arabic <-> Roman" value="toRoman" checked={isArabicToRoman} onChange={onChange} />
        <RadioButton id="id-2" name="conversion" label="Roman <-> Arabic" value="fromRoman" checked={!isArabicToRoman} onChange={onChange} />
      </div>

      <div className="inputs-container">
        <Input label={isArabicToRoman ? "Arabic" : "Roman"} name="from" value={fromValue} onChange={onFromValueChange} />
        <Input label={isArabicToRoman ? "Roman": "Arabic"} value={toValue} disabled />
      </div>
    </main>
  );
}

export default App;
