
import {User} from 'lucide-react'

export default  function Body(){

    return(
    <form className="p-5 gap -4">
        <div className="flex gap-3 items-center justify-center">
          <div className=" grid gap-2 items-center ">
           <label>Top Text</label>
        <input  type="text" placeholder=" Shut up" className="border-solid border-1 border-black"/>
        
        </div>
        <div className="grid   gap-2 items-center">
            <label htmlFor="">Bottom Text</label>
            <input type="text" placeholder=" And take my money" className="border-solid border-1 border-black"/>
        </div>
        
        </div>
        <div className="p-5">
           <button 
                    type="submit" 
                    className="flex items-center justify-center gap-2 bg-[#8d24b4] text-white w-full py-4"
                    >
                    <span>get new image</span>
                    <User strokeWidth={1} nonScalingStroke />
            </button>

        </div>
        
     </form>
    )
        
}
