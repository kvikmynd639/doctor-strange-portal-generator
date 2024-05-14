import React from 'react';
import { motion } from 'framer-motion';

const Portal = ({ id, x, y, onRemove }) => {
  return (
    <motion.div
      className="w-20 h-20 bg-blue-500 rounded-full absolute"
      style={{ top: `${y}px`, left: `${x}px` }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <button className="text-white" onClick={() => onRemove(id)}>Bang</button>
    </motion.div>
  );
};

export default Portal;
