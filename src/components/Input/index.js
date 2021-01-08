import React from 'react';
import './index.css';

const Input = ({
  value,
  onChange,
  label,
  disabled,
}) => {

  return (
    <div className="input-container">
      <input className="input-value" type="text" value={value} onChange={onChange} disabled={disabled} />
      <label className="input-label">
        {label}
      </label>
    </div>
  );
}

export default Input;