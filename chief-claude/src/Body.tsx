 import { Plus } from 'lucide-react'
 import {useState} from 'react'

 export default function Body(){

    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    function handelSubmit(event){
        event.preventDefault();

        setItems([...items, inputValue]);

        setInputValue('')
    }

    return (
        <div>
            <form onSubmit={handelSubmit}  className="flex items-center justify-center gap-2 p-3">
                <input type='text'
                value ={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="     eg. eragon"   
                className ="w-[500px] h-[25px] rounded-md  border-solid border-1" />
                <button type="submit" className="w-[150px] h-[25px] text-white bg-black rounded-md gap-1 flex items-center justify-center">
                    <Plus />
                    <span className="text-white">Add ingrediant</span>
                     </button>
            </form>

            <div className=' flex-cols items-center justify-center p-2 gap-3' >
                <h2 className="font-bold font-size-34 text- green">Ingredients on hand</h2>
                <ul className="list-disc pl-5">
                    {items.map((item, index)=>(
                        <li key={index}>{item}</li>

                    ) )}
                    
                </ul>
            </div>
        </div>
    )
 }