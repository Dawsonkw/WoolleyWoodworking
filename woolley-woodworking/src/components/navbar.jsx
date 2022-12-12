import React, { Component } from 'react';



class Navbar extends Component {
  render() {

    return (

      <header className=' bg-black border-b border-gray-500 py-2'>
        <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%]'>
          <img className='px-4 rounded-3xl' src="/src/assets/vectorlogo.png" alt="logo" width={300} />
    

          <nav className= 'flex items-center w-auto'>
            <ul className='text-base text-white flex justify-between'>
              <li>
                <a className='px-5  py-2 hover:text-blue-600 font-semibold' href="#">Home</a>
              </li>
              <li>
                <a className='px-5  py-2 hover:text-blue-600 font-semibold' href="#">Portfolio</a>
              </li>
              <li>
                <a className='px-5  py-2 hover:text-blue-600 font-semibold' href="#">About</a>
              </li>
              <li>
                <a className=' px-6 py-2 bg-blue-600 text-white rounded-xl hover:text-gray-900' href="#">Contact</a>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>

    );
  }
}

export default Navbar;