import Header from "./Header.tsx"
import Body from "./Body.tsx"
function App() {
  

  return (
    <>
     <div className="bg-[#0e0f15] h-screen w-full relative">
      <div className="flex align-center absolute bg-[#162659] w-[40%] h-[50%]  rounded-full top-[30%] left-[30%] blur-lg p-10" ></div>
      <Header />
      <Body />
      </div>
    </>
  )
}

export default App
