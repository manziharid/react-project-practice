import { BluetoothConnected } from "lucide-react"
import type { LucideIcon } from "lucide-react"


type Item ={
    Icon : LucideIcon
    title : string,
    heading : string,
    heading2?: string,
    count : number,
    Icons : LucideIcon,
    Iconv : LucideIcon
}
export default function BodyItem({Icon, title, heading, heading2, count, Icons, Iconv}: Item){

    return(
        <div className="bg-[#101214] rounded-xl p-3 flex flex-col gap-2 w-[271px] text-[#b3b9c4]">
    
    <div className="flex items-center justify-between px-1 py-1">
        <p className="text-sm font-semibold text-[#dee4ee]">{title}</p>
        <div className="flex items-center gap-3">
            <p className="text-sm text-[#b3b9c4]">{count}</p>
            <Icon size={16} className="text-[#b3b9c4] hover:text-white cursor-pointer" />
        </div>
    </div>

    
    <div className="flex flex-col gap-1.5 w-full">
        <button className="text-left px-3 rounded-lg bg-[#22252a] w-full h-[38px] text-sm text-[#dee4ee] font-normal hover:bg-[#2c3036] transition-colors">
            {heading}
        </button>
        {heading2 && (
            <button className="text-left px-3 rounded-lg bg-[#22252a] w-full h-[38px] text-sm text-[#dee4ee] font-normal hover:bg-[#2c3036] transition-colors">
                {heading2}
            </button>
        )}
    </div>
    
    
    <div className="flex items-center justify-between mt-1 px-1 pt-1">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-[#ffffff0a] py-1 px-2 rounded-md -ml-2 transition-colors">
            <Icons size={16} className="text-[#b3b9c4]" />
            <p className="text-sm font-medium text-[#b3b9c4]">Add a card</p>
        </div>
        <Iconv size={16} className="text-[#b3b9c4] cursor-pointer hover:text-white" />
    </div>
</div>

    )
}