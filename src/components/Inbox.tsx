
import {Inbox as InboxIcon , TextAlignJustifyCenter, Ellipsis  } from 'lucide-react'
import InboxItem from './InboxItem'

export default function Inbox(){
    return(
        <div className="ml-[17px] rounded-xl border-1 border-white w-[274px] -mt-25">
          <div className="bg-[#162136] h-[55px] flex justify-between text-white  rounded-t-xl">
            <div className="flex gap-2 m-2">
                <InboxIcon strokeWidth={1.5} nonScalingStroke />
            <span> Inbox</span>
            </div>
            <div className="flex gap-2 m-2">
                <TextAlignJustifyCenter strokeWidth={1.5} nonScalingStroke />
                <Ellipsis strokeWidth={1.5} nonScalingStroke />

            </div>
            
          </div>
          <div className="bg-[#162f57] h-[500px] rounded-b-xl">
            <InboxItem title="Add a Card"/>
            <InboxItem title="java class"/>

          </div>
        </div>
    )
}