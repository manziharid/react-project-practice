import { useState } from 'react'
import Header from './components/header'
import Inbox from './components/Inbox'
import Body from './components/body'

function App() {
  

  return (
    <div className="bg-[#1f1f21] h-screen w-full ">
      
      <Header />
      <div className="flex gap-3">
      <Inbox />
      <Body />
      </div>
          
    </div>
  )
}

export default App
