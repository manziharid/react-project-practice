import { Plus, ChevronDown, Mic } from "lucide-react";
export default function Body(){
    return(
       <div className="flex h-screen items-center justify-self-center  flex-col flex-1 gap-6 px-4 ">
        <p className=" font-medium text-4xl text-white ">Where should we start?</p>
        <div className="flex  rounded-full w-full h-16 bg-[#1e201e] text-white max-w-2xl  px-50 justify-between items-center ">
            <div className="flex items-center flex-1 mr-4 ">
            <button className="hover:text-white  transition-colors">
                <Plus strokeWidth={1.5} nonScalingStroke />
            </button>
            <input type="search"  placeholder="Ask Gemini " className="rounded-xl w-full h-16 text-white bg-[#1e201e]"/>
            </div>
            <div className="flex items-center gap-4 justify-between">
                <div className="flex items-center px-3 py-1.5 hover:rounded-full bg-[#1e201d] w-full ">
                    <p>Gemini</p>
                    <p>Auto</p>
                    <ChevronDown strokeWidth={1.5} nonScalingStroke />
                    
                </div>
                <div>
                    <Mic strokeWidth={1.5} nonScalingStroke />
                </div>
            </div>
        </div>
        
       </div> 
    )
}