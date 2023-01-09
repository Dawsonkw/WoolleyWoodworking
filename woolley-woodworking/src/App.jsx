import { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/navbar.jsx'
import MainSection from './components/MainSection';
import PhotoGallery from './components/PhotoGallery';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">

      <main className='bg-white'>
        <section className='min-h-screen'>
          <div>
            <Navbar />         
          </div>
          <PhotoGallery />
          <Contact />
        </section>
        <MainSection />
        
        <h2>Lorem Ipsum Doler Sit Amet rattatata pokedex jiu jistu Bulbasaur Dinodon Charmander Argonauts beyblades</h2>
        
      </main>

    </div>
  )
}

export default App

//  Use these as an example template for website design https://www.tallguywoodworking.com/#  and   https://customfurnituredfw.com/ 

// We're going to want to turn the pictures into a list of objects w/ URLsrc, name of piece, description, and alt 
// then we're going to need to loop through the list and render each image component with it's info (See the example in the react docs)
// photo gallery 