import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="w-full h-16 bg-slate-900 flex items-center justify-between px-4">
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
          alt="Logo"
          className="w-24 h-12 object-fit"
        />
        <span className="ml-3 text-xl text-white font-semibold">Portal Generator</span>
      </div>
      <div className="flex space-x-8 text-slate-200">
        <p className="cursor-pointer hover:text-white"><Link to='/'>Home</Link></p>
        <p className="cursor-pointer hover:text-white"><Link to='/game'>Game</Link></p>
        <p className="cursor-pointer hover:text-white">About</p>
      </div>
    </div>
  );
};

export default Nav;
