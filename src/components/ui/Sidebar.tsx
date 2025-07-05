import { type ReactElement, type ReactNode } from 'react'
type sizeStyle = "sm" | "md" | "lg";
import SidebarItem from './SidebarItem'
import { TweetIcon } from '../../icons/TweetIcon'
import { VideoIcon } from '../../icons/VideoIcon'
import { DocumentIcon } from '../../icons/DocumentIcon'
import { LinkIcon } from '../../icons/LinkIcon'
import { TagIcon } from '../../icons/TagIcon'
import {ShareIcon} from '../../icons/BrainIcon'
interface SidebarItemProps {
    text: string,
    icon: ReactElement,
    size?: sizeStyle,
    onClick?: () => void
}

const items: SidebarItemProps[] = [
    {
        text: "Tweets",
        icon: <TweetIcon size="md" />
    },
    {
        text: "Videos",
        icon: <VideoIcon size="md" />
    },
    {
        text: "Documents",
        icon: <DocumentIcon size="md" />
    },
    {
        text: "Links",
        icon: <LinkIcon size="md" />
    },
    {
        text: "Tags",
        icon: <TagIcon size="md" />
    }
]

export function Sidebar(): ReactNode {
    return (
        <div className="w-72 border-r border-gray-200 min-h-screen fixed shadow-sm">
            <SidebarItem text={"Mindly"} icon={<ShareIcon size="lg" />} size="lg"  />
            <div className="flex flex-col gap-2 p-4">
                <SidebarItem text={"Tweets"} icon={<TweetIcon size="md" />} size="sm" />
                <SidebarItem text={"Videos"} icon={<VideoIcon size="md" />} size="sm" />
                <SidebarItem text={"Documents"} icon={<DocumentIcon size="md" />} size="sm" />
                <SidebarItem text={"Links"} icon={<LinkIcon size="md" />} size="sm" />
                <SidebarItem text={"Tags"} icon={<TagIcon size="md" />} size="sm" />


                {/* {
            items.map((item, index) => {
                <SidebarItem text={item.text} icon = {item.icon }/>
            })
        } */}
            </div>
        </div>
    )
}