import { type ReactElement, type ReactNode } from 'react'
type sizeStyle = "sm" | "md" | "lg";
import SidebarItem from './SidebarItem'
import { TweetIcon } from '../../icons/TweetIcon'
import { VideoIcon } from '../../icons/VideoIcon'
import { DocumentIcon } from '../../icons/DocumentIcon'
import { LinkIcon } from '../../icons/LinkIcon'
import { TagIcon } from '../../icons/TagIcon'
import { ShareIcon } from '../../icons/BrainIcon'

interface SidebarProps {
    onSelectType: (type: ContentType) => void;
    activeType: ContentType;
}
type ContentType = "document" | "tweet" | "youtube" | "";

interface SidebarItemProps {
    text: string,
    icon: ReactElement,
    type: ContentType,
}
const items: SidebarItemProps[] = [
    {
        text: "Tweets",
        icon: <TweetIcon size="md" />,
        type: 'tweet',
        
    },
    {
        text: "Youtube",
        icon: <VideoIcon size="md" />,
        type: 'youtube'
    },
    {
        text: "Documents",
        icon: <DocumentIcon size="md" />,
        type: 'document'
    },
    // {
    //     text: "Links",
    //     icon: <LinkIcon size="md" />,
    //     type: other
    // },
    {
        text: "All",
        icon: <TagIcon size="md" />,
        type: ''
    }
]

export function Sidebar({ onSelectType, activeType }: SidebarProps): ReactNode {
    return (
        <div className="w-72 border-r border-gray-200 min-h-screen fixed shadow-sm">
            <SidebarItem text={"Mindly"} icon={<ShareIcon size="lg" />} size="lg" />
            <div className="flex flex-col gap-2 p-4">
                {items.map(({ text, icon, type }) => (
                    <SidebarItem
                    key={text}
                    text={text}
                    icon={icon}
                    active={type === activeType}
                    onClick={() => onSelectType(type)}
                  />
                ))}
            </div>
        </div>
    )
}