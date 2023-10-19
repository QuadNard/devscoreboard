
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Quiz from './pages/Quiz';
import TitleScreenOverlay from './components/ui/TitleScreenOverlay'



function App() {
  return (
    <div className='grid grid-rows-3 overflow-hidden'>
    
    {
      // Start Menu ↓
    }
    {/*
        <AnimatePresence>
        <TitleScreenOverlay />
      </AnimatePresence>
  */}
  <Quiz />
    </div>
  )
}

export default App
