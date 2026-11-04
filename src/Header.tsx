import {Download, Astroid, MessageCircleDashed } from 'lucide-react';
export  default function Header(){
return (
    <header className="w-full   p-4">
         <div className="flex mx-auto px-5 justify-end  gap-6">
            <div className=" shadow-xl rounded-xl hover:rounded-xl bg-[#11131f] px-3 py-1 transition-all duration-200">
           <a href="" className="flex gap-2  text-white">
            <Download className="w-5 h-5"/>
            <span className="font-medium whitespace-nowrap">Get app</span>
            </a> 
            </div>
            <div className="shadow-xl rounded-xl bg-[#1F3B9B] px-3 py-1 ">
                <a href=""className="flex gap-2 text-white">
                    <Astroid strokeWidth={1.5} nonScalingStroke className="w-5 h-5 "/>
                    <span className="font-medium whitespace-nowrap">Upgrade</span>
                </a>
            </div>
            <div>
                   <a href="" className="text-white">
                    <MessageCircleDashed strokeWidth={1.5} nonScalingStroke />
                   </a>
            </div>
         </div>
    </header>
)
}