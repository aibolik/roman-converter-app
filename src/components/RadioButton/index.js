import React from 'react';
import './index.css';

const RadioButton = ({
  id,
  name,
  checked,
  label,
  onChange,
  value,
}) => {

  return (
    <div className="radio-button-container">
      <input id={id} type="radio" name={name} value={value} onChange={onChange} />
      <label for={id} className={`radio-button ${checked ? 'radio-button--checked' : ''}`}>
        {label}
      </label>
    </div>
  );
}

export default RadioButton;