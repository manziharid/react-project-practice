import type { LucideIcon} from  'lucide-react/types'
type  SidebarItemProp ={
    Icon: LucideIcon,
    title: string,
    href: string
}
export default function SidebarItem({Icon, title, href}:SidebarItemProp){
    return(
        <a  href={href} className=" flex  items-center gap-4 ">
            <Icon size={15} color="white"/>
            <span>{title}</span>
        </a>
    )
}
