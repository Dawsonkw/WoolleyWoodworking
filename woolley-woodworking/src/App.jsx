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
  const images = [
    "/src/assets/IMG-3820.jpg",
    "/src/assets/IMG-3968.jpg",
    "/src/assets/IMG-3969.jpg",
    "/src/assets/IMG-3970.jpg",
    "/src/assets/IMG-3971.jpg",
    "/src/assets/IMG-3972.jpg",
    "/src/assets/IMG-3973.jpg",
    "/src/assets/IMG-3980.jpg",
    "/src/assets/IMG-5576.jpg",
    "/src/assets/IMG-5577.jpg",
    "/src/assets/IMG-5579.jpg",
    "/src/assets/IMG-5580.jpg",
    "/src/assets/IMG-5582.jpg",
    "/src/assets/IMG-5583.jpg",
    "/src/assets/IMG-5584.jpg",
    "/src/assets/IMG-5585.jpg",
    "/src/assets/IMG-5763.jpg",
    "/src/assets/IMG-5764.jpg",
    "/src/assets/IMG-5765.jpg",
    "/src/assets/IMG-5766.jpg",
    "/src/assets/IMG-5767.jpg",
    "/src/assets/IMG-5768.jpg",
    "/src/assets/IMG-5869.jpg",
    "/src/assets/IMG-5870.jpg",
    "/src/assets/IMG-5871.jpg",
    "/src/assets/IMG-5872.jpg",
    "/src/assets/IMG-5873.jpg",
    "/src/assets/IMG-5874.jpg",
    "/src/assets/IMG-5875.jpg",
    "/src/assets/IMG-5876.jpg",
    "/src/assets/IMG-5877.jpg",
    "/src/assets/IMG-5878.jpg",
    "/src/assets/IMG-5879.jpg",
    "/src/assets/IMG-5880.jpg",
    "/src/assets/IMG-5881.jpg",
    "/src/assets/IMG-5882.jpg",
    "/src/assets/IMG-5883.jpg",
    "/src/assets/IMG-5884.jpg",
    "/src/assets/IMG-5885.jpg",
    "/src/assets/IMG-5891.jpg",
    "/src/assets/IMG-5892.jpg",
    "/src/assets/IMG-5893.jpg",
    "/src/assets/IMG-5894.jpg",
    "/src/assets/IMG-5895.jpg",
    "/src/assets/IMG-5898.jpg",
]

  return (
    <div className="App">

      <main className='bg-white'>
        <section className='min-h-screen'>
          <div>
            <Navbar />         
          </div>
          <PhotoGallery images={images} />
          <MainSection />
          <Contact />
          
        </section>
        
        
        <h2>Lorem Ipsum Doler Sit Amet rattatata pokedex jiu jistu Bulbasaur Dinodon Charmander Argonauts beyblades</h2>
        
      </main>

    </div>
  )
}

export default App

// I'm going to build a stripe component that isnt going to be necessasarily hooked into the the project at fisrt, but will exist in the files so that when it comes time to need it I can just add it to the app =p
