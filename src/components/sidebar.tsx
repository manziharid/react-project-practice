
import {Bell, Columns3} from 'lucide-react'
import SidebarItem from './SidebarItem'

export default function Sidebar(){
    return(
        <div className="">
            <SidebarItem Icon={Columns3} title="boards" href="location" />
            <SidebarItem Icon={Bell} title="notification" href="location" />
        </div>
    )
}