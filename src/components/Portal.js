import React from 'react';

const Portal = ({ id, x, y, onRemove }) => {
  return (
    <div
      className="w-20 h-20 bg-blue-500 rounded-full absolute"
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <button className="text-white" onClick={() => onRemove(id)}>X</button>
    </div>
  );
};

export default Portal;
