import { useState } from 'react'

import Body from './Body.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black h-screen w-full">
      
      <Body />

    </div>
  )
}

export default App
