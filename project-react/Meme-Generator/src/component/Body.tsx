
import {User} from 'lucide-react'

export default  function Body(){

    return(
    <form>
        <div className="flex gap-5">
          <div className="flex flex-cols  gap-3 items-center ">
        <label>Top Text</label>
        <input  type="text" placeholder=" Shut up" className="border-solid border-1 border-black"/>
        
        </div>
        <div className="flex flex-cols  gap-3 items-center ">
            <label htmlFor="">Bottom Text</label>
            <input type="text" placeholder=" And take my money" className="border-solid border-1 border-black"/>
        </div>
        
        </div>
        <div>
            <button type="submit" className="bg-blue-400 text-white items-center justify-center">
                get new image
                <User strokeWidth={1} nonScalingStroke />
            </button>
        </div>
        
     </form>
    )
        
}
