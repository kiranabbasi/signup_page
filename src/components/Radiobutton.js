import React from 'react';

const RadioButton = ({ checked, onChange }) => {
  return (
    <label className="inline-flex items-center space-x-2 cursor-pointer" onClick={onChange}>
      <span className={`inline-block rounded-full w-5 h-5 border-2 ${checked ? 'bg-white border-black border-8' : 'border-gray-400'}`} />
    </label>
  );
};

export default RadioButton;
