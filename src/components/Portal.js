import React from 'react';
import { motion } from 'framer-motion';

const Portal = ({ id, x, y, onRemove }) => {
  return (
    <motion.div
      className="w-20 h-20 rounded-full absolute bg-cover bg-center"
      style={{ 
        top: `${y}px`, 
        left: `${x}px`,
        backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8911a890-1488-4033-b210-287b6a9c5319/df3bxu0-0c23950d-2e9a-4bb4-8d9a-802938fa5e87.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5MTFhODkwLTE0ODgtNDAzMy1iMjEwLTI4N2I2YTljNTMxOVwvZGYzYnh1MC0wYzIzOTUwZC0yZTlhLTRiYjQtOGQ5YS04MDI5MzhmYTVlODcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hqjxSWus3TVCoFZnkmEzezXlOxRlDQwWVQNJ9T7TEj4)'
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <button className="text-white" onClick={() => onRemove(id)}></button>
    </motion.div>
  );
};

export default Portal;
