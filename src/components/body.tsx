
import { SquareKanban, ChevronDown, Plug, Zap, TextAlignJustifyCenter, Star, LockKeyhole, UserRoundPlus, Ellipsis, Plus, StickyNotePlus } from 'lucide-react'
import backgroundimage from '/src/image/backgroundimage.webp'
import mk from '/src/image/mk.png'
import BodyItem from './BodyItem.tsx'
export default function Body(){

    return(
        <div className="border-1 border-gray-500 w-[1049px] -mt-25 rounded-xl bg-center bg-cover" 
        style={{backgroundImage: `url(${backgroundimage})`}}>

            <div className="bg-[#8a512b]  w-full h-[59px] flex text-white py-2 justify-between space-between">
                <div className="flex gap-2 justify-between items-center ">
                    <p className="rounded w-[240px] h-[25px] px-4 ml-2 hover:bg-[#807d77] transition-colors">my daily activities and recarp</p>
                    <div className="flex rounded h-[25px] w-[53px] hover:bg-[#807d77] transition-colors">
                        <SquareKanban strokeWidth={1.5} nonScalingStroke size={19} />
                        <ChevronDown strokeWidth={1.5} nonScalingStroke size={19} />
                    </div>
                </div>
                <div className="flex gap-2 justify-between items-center">
                    <img src={mk} className="w-[28px] h-[30px]"/>
                    <Plug strokeWidth={1} nonScalingStroke size={19} />
                    <Zap strokeWidth={1} nonScalingStroke size={19} />
                    <TextAlignJustifyCenter strokeWidth={1.5} nonScalingStroke size={19} />
                    <Star strokeWidth={1} nonScalingStroke size={19} />
                    <LockKeyhole strokeWidth={1} nonScalingStroke size={19} />
                    <button className="bg-[#dcdfe5] rounded w-[85px] h-[28px] flex gap-2 text-black justify-center items-center ">
                        <UserRoundPlus size={12} />
                        Share
                    </button>
                    <Ellipsis strokeWidth={1} nonScalingStroke size={19} />

                </div>

            </div>
            <div className="flex p-4 gap-3">
                <BodyItem  title="Auca Weekely schedule"  count={2} Icon={Ellipsis} heading="Java Assignment" heading2='SMD class' Icons={Plus} Iconv={StickyNotePlus} />

                <BodyItem  title="To DO schedule"  count={1} Icon={Ellipsis} heading="Trello cloning" heading2='Duolingo exam' Icons={Plus} Iconv={StickyNotePlus} />
                <BodyItem  title="DOING"  count={3} Icon={Ellipsis} heading="Trello c" heading2='Duolingo exam' Icons={Plus} Iconv={StickyNotePlus} />
            </div> 

        </div>
    )
}
// type Item ={
//     Icon : LucideIcon
//     title : string,
//     heading : string,
//     heading2: string,
//     count : number,
//     Iconp : LucideIcon,
//     Icone : LucideIcon
// }