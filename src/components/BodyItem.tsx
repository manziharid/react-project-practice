import { BluetoothConnected } from "lucide-react"
import type { LucideIcon } from "lucide-react/types"


type Item ={
    Icon : LucideIcon
    title : string,
    heading : string,
    heading2: string,
    count : number
}
export default function BodyItem({Icon, title, heading, heading2, count}: Item){

    return(
        <div>
            <div>
                <p>{title}</p>
                <div>
                    <p>{count}</p>
                    <Icon size={15} color="white"/>
                </div>
            </div>
            <div>
                <button>{heading}</button>
                <button>{heading2}</button>


            </div>
            
            <div>
                <div>
                    <Icon size={15} color="white" />
                    <p> Add card</p>
                </div>
                <Icon size={15} color="white"
            </div>
        </div>
    )
}