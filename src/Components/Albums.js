import Album1 from '../Images/Album 1.png';
import Album2 from '../Images/Album 2.png';
import Album3 from '../Images/Album 3.png';
import Album4 from '../Images/Album 4.png';
import Tshirt from '../Images/Shirt.png'
import Cofee from '../Images/Cofee.png'
import Yt from '../Images/YT.png'
import Facebook from '../Images/Facebook.png'
import spotify from '../Images/Spotify_icon.svg.png'

const Albums = () => {

      
      return (
            <div>
                  <div className='flex flex-wrap justify-center gap-14 max-w-[800px] m-auto mt-26'>

                        <h2 className='w-full text-center mt-6 text-3xl font-bold italic'>MUSIC</h2>


                        <div className="bg-white p-4 rounded-lg cursor-pointer">
                              <h2 className="text-xl font-bold ml-[110px]">Album 1</h2>
                              <img src={Album1} alt='album1' className="w-full mt-5 transform transition-transform hover:scale-105 " />
                              <p className="mt-2">$12.99</p>
                              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    ADD TO CART
                              </button>
                        </div>

                        <div className=" bg-white p-4 rounded-lg">
                              <h2 className="text-xl font-bold ml-[110px]">Album 2</h2>
                              <img src={Album2} alt='album2' className="w-full mt-5 transform transition-transform hover:scale-105 " />
                              <p className="mt-2">$25.99</p>
                              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    ADD TO CART
                              </button>
                        </div>

                        <div className=" bg-white p-4 rounded-lg">
                              <h2 className="text-xl font-bold ml-[110px]">Album 3</h2>
                              <img src={Album3} alt='album3' className="w-full mt-5 transform transition-transform hover:scale-105" />
                              <p className="mt-2">$19.89</p>
                              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    ADD TO CART
                              </button>
                        </div>

                        <div className=" bg-white p-4 rounded-lg">
                              <h2 className="text-xl font-bold ml-[110px]">Album 4</h2>
                              <img src={Album4} alt='album4' className="w-full mt-5 transform transition-transform hover:scale-105" />
                              <p className="mt-2">$39.99</p>
                              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    ADD TO CART
                              </button>
                        </div>


                        <h2 className='w-full text-center mt-6 text-3xl font-bold italic'>MERCH</h2>

                        <div className=" bg-white p-4 rounded-lg">
                              <h2 className="text-xl font-bold ml-[110px]">T-Shirt</h2>
                              <img src={Tshirt} alt='T-shirt' className="w-full mt-5 transform transition-transform hover:scale-105" />
                              <p className="mt-2">$39.99</p>
                              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    ADD TO CART
                              </button>
                        </div>

                        <div className=" bg-white p-4 rounded-lg">
                              <h2 className="text-xl font-bold ml-[110px]">Coffee Cup</h2>
                              <img src={Cofee} alt='coffee' className="w-full mt-5 transform transition-transform hover:scale-105" />
                              <p className="mt-2">$16.99</p>
                              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    ADD TO CART
                              </button>
                        </div>

                        <button className='mt-2 bg-slate-600 text-blue-500 font-bold px-4 py-4 rounded-md hover:bg-slate-900'>
                              See the cart
                        </button>



                  </div>


                  <footer className='w-full p-6 bg-gray-700 text-white flex justify-around items-center mt-10'>
                        <span className='font-extrabold text-5xl cursor-pointer'>The Generics</span>

                        <div className="flex space-x-16 cursor-pointer">
                              <img src={Yt} alt='youtube' className='w-8 rounded-full' />
                              <img src={Facebook} alt='facebook' className='w-8 rounded-full' />
                              <img src={spotify} alt='spotify' className='w-8 rounded-full' />
                        </div>
                  </footer>


            </div>

      );
};

export default Albums;
