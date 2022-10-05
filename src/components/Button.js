import React from 'react';

function Button({ type, title ,className }) {
  return (
    <div>
      <button type={type} className={className}>{title}</button>
    </div>
  );
}

export default Button;
