

import type { LucideIcon } from 'lucide-react/types'

type InboxItemProp = {
    title : string,
    
}

export default function InboxItem( {title}: InboxItemProp){
    return(
        <div className=" p-3 w-full">
       <button className="w-full bg-[#22272b] text-[#9fadbc] text-sm font-medium py-2 px-3 rounded-xl text-left hover:bg-[#2c333a] transition-colors">
       {title}
       </button>
  
</div>
    )
}