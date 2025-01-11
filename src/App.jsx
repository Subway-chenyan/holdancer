import { useState } from 'react'
import Stage from './components/Stage'
import ControlPanel from './components/ControlPanel'
import './App.css'

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-3/4 h-full">
        <Stage />
      </div>
      <div className="w-1/4 h-full overflow-y-auto">
        <ControlPanel />
      </div>
    </div>
  )
}

export default App
