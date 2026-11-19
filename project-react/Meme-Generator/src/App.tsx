import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './component/Header.tsx'
import Body from './component/Body.tsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Body />
        
    </div>
  )
}

export default App
