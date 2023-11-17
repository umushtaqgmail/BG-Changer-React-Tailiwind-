
import './App.css'
import { useState } from 'react'

function App() {

  
  let [color, setColor] = useState("purple")

  return (
  <div className='w-full h-screen Transition-200' style={{backgroundColor:color}}>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-2'>
     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl'> 
      <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"green"}} 
      onClick={()=>setColor("green")}
      >  Green</button>
      </div>  
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl'> 
      <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"blue"}} 
         onClick={()=>setColor("blue")}
      >  Blue</button>
      </div>  
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl'> 
      <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"purple"}}
         onClick={()=>setColor("purple")}
      >  Purple</button>
      </div>  
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl'> 
      <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"black"}} 
          onClick={()=>setColor("black")}
      >  Black</button>
      </div>  
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl'> 
      <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"red"}}
         onClick={()=>setColor("red")}
      >  Red</button>
      </div> 
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl'> 
      <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"violet"}}
         onClick={()=>setColor("violet")}
      >  Violet</button>
      </div> 
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl'> 
      <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"orange"}}
         onClick={()=>setColor("orange")}
      >  Orange</button>
      </div>    
</div>
  </div>
  )
}

export default App
