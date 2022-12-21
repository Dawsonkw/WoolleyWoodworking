import React, { Component } from 'react';



class Navbar extends Component {
  render() {

    return (

      <header className=' bg-charcoal border-b border-gray-500 py-2'>
        <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%]'>
          <img className='px-4 rounded-3xl' src="/src/assets/vectorlogo.png" alt="logo" width={300} />
    

          <nav className= 'flex items-center w-auto'>
            <ul className='text-base text-cream flex justify-between'>
              <li>
                <a className='px-5  py-2 hover:text-gold font-semibold' href="#">Home</a>
              </li>
              <li>
                <a className='px-5  py-2 hover:text-gold font-semibold' href="#">Portfolio</a>
              </li>
              <li>
                <a className='px-5  py-2 hover:text-gold font-semibold' href="#">About</a>
              </li>
              <li>
                <a className=' px-6 py-2 bg-tan text-cream rounded-xl hover:text-gray-800' href="#Contact">Contact</a>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>

    );
  }
}

export default Navbar;