 import { Plus } from 'lucide-react'

 export default function Body(){

    return (
        <div>
            <div className="flex items-center justify-center gap-2 p-3">
                <input type='text'
                placeholder="     eg. eragon" className ="w-[500px] h-[25px] rounded-md  border-solid border-1" />
                <button className="w-[150px] h-[25px] text-white bg-black rounded-md gap-1 flex items-center justify-center">
                    <Plus />
                    <span className="text-white">Add ingrediant</span>
                     </button>
            </div>

            <div>
                <h2>Ingredients on hand</h2>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
 }