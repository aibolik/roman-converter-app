import React from 'react';
import './index.css';

const Input = ({
  id,
  value,
  onChange,
  label,
  disabled,
}) => {

  return (
    <div className="input-container">
      <input id={id} className="input-value" type="text" value={value} onChange={onChange} disabled={disabled} />
      <label htmlFor={id} className="input-label">
        {label}
      </label>
    </div>
  );
}

export default Input;