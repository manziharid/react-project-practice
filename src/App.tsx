import Header from "./Header.tsx"
import Body from "./Body.tsx"
import Sidebar from "./Sidebar.tsx"
function App() {
  

  return (
    
     <div className="bg-[#0e0f15] min-h-screen w-full relative">
      <div className="flex place-content-center absolute bg-[#162659] w-[60%] h-[70%]  rounded-full top-[10%] left-[20%] blur-2xl" ></div>
      <div className="relative z-10">
       <Header />
       <Body />
       <Sidebar />
       
      </div>
      
      </div>
    
  )
}

export default App
