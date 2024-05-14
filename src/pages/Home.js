import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='h-screen w-full relative'>
        <div className="relative">
          <img
            src='https://media.npr.org/assets/img/2016/10/26/cm-ss-00542_rs_20_wide-764d77b659bdc62277df63015e39041280c9c588.jpg'
            className='w-full h-full object-cover'
            alt="Background"
          />
          <button
            className="absolute top-1/3 right-20 select-none rounded-lg bg-amber-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <Link to='/game'>
            Play the Game
            </Link>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
