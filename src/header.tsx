
import mk from './image/mk.png'
import {LayoutGridCircles, Search, Megaphone, Bell, Info } from 'lucide-react'
import logo from './logo.svg'
export  default function Header(){
 
    return(
        <div className="flex p-2 justify-between">
            <div className="flex gap-2">
             <LayoutGridCircles strokeWidth={1.5} nonScalingStroke  className="text-white"/>
             <img src={logo} alt=""/>
             
            </div>
            <div className="flex gap-3">
                <div>
             {/* <Search strokeWidth={1.5} nonScalingStroke className="absolute left-3 text-gray-400 w-4 h-4"/>                 */}
                <input type="text"
                 placeholder="search" 
                 className="bg-[#1f1f21] border-1 border-solid border-gray-500 w-[781px] h-[32px] rounded-xl text-white"/>

                </div>

                <button className="rounded-xl bg-[#719bd6] w-[71px] h-[32px] text-white"> Search</button>
            </div>
            <div className="flex text-white gap-2 justify-end-safe">
                <Megaphone strokeWidth={1.5} nonScalingStroke />
                <Bell strokeWidth={1.5} nonScalingStroke />
                <Info strokeWidth={1.5} nonScalingStroke />
                <img src={mk} alt="" className="w-[21px] h-[21px]"/>

            </div>

        </div>
    )
}