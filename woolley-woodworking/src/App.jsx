import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main className='bg-white px-10 md:px-20'>
        <section className='min-h-screen'>
          <nav className='bg-black py-9 mb-12 flex justify-between '>
            <h1 className='text-3xl text-teal-500'>Woolley Woodworking</h1>
            {/* You can later add in a link to the h1 element that returns to the landing */}
            <ul className='flex items-center space-x-4'>
              <li><a class='text-white' href="">Portfolio</a></li>
              <li><a class='text-white' href="">About</a></li>
              <li className='m'><a class='text-white' href="">Contact</a></li>
            </ul>
          </nav>
        </section>
        
        <h2>Lorem Ipsum Doler Sit Amet rattatata pokedex jiu jistu Bulbasaur Dinodon Charmander Argonauts</h2>
      </main>

    </div>
  )
}

export default App

{/* Use these as an example template for website design https://www.tallguywoodworking.com/#  and   https://customfurnituredfw.com/ */}