import React from 'react';

const NavBar = () => {
      return (
            <div>

                  <nav className="bg-black p-2">
                        <div className="flex items-center justify-center">

                              <div className="flex gap-20 items-center m-auto ">
                                    <a className="text-white text-xl" href="#">Home</a>
                                    <a className="text-white text-xl" href="#">Store</a>
                                    <a className="text-white text-xl" href="#">About</a>
                              </div>

                              <div className='flex items-center justify-between'>
                                    <button className="text-white bg-transparent px-6 py-2 rounded-lg border border-blue-600">
                                          Cart
                                    </button>
                              </div>
                        </div>

                  </nav>

                  <div className='flex justify-center bg-slate-500 p-8 border border-t-white'>
                        <h1 className='text-8xl font-extrabold text-white'>The Generics</h1>
                  </div>


            </div>



      );
};

export default NavBar;
