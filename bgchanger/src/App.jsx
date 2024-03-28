
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (

    <div id='div' className="w-full h-screen" style={{ backgroundColor: color }}
    >box
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "blue" }}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "green" }}>Red</button>
          <button onClick={() => setColor("gray")} className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "gray" }}>Red</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "orange" }}>Red</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 rounded-full shadow-lg' style={{ backgroundColor: "pink" }}>Red</button>
        </div>
      </div>
    </div>


  )
}

export default App