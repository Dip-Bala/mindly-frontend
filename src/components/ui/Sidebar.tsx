import { type ReactElement, type ReactNode, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import SidebarItem from './SidebarItem'
import { TweetIcon } from '../../icons/TweetIcon'
import { VideoIcon } from '../../icons/VideoIcon'
// import { DocumentIcon } from '../../icons/DocumentIcon'
// import { LinkIcon } from '../../icons/LinkIcon'
// import { TagIcon } from '../../icons/TagIcon'
// import { BrainIcon } from '../../icons/BrainIcon'
import { HomeIcon } from '../../icons/HomeIcon'
import { UserIcon } from '../../icons/UserIcon';

interface SidebarProps {
    onSelectType: (type: ContentType) => void;
    activeType: ContentType;
}
type ContentType = "document" | "tweet" | "youtube" | "" | "logout";

interface SidebarItemProps {
    text: string,
    icon: ReactElement,
    type: ContentType,
}
const items: SidebarItemProps[] = [
    {
        text: "Home",
        icon: <HomeIcon size="md" />,
        type: ''
    },
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
    // {
    //     text: "Documents",
    //     icon: <DocumentIcon size="md" />,
    //     type: 'document'
    // },
    // {
    //     text: "Links",
    //     icon: <LinkIcon size="md" />,
    //     type: other
    // }
]

export function Sidebar({ onSelectType, activeType }: SidebarProps): ReactNode {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const navigate = useNavigate();
    function logout(){
        localStorage.removeItem('authorization');
        navigate('/', {replace : true})
    }
    function ShowLogout(){
        return (
        <div className="border border-gray-100 rounded-sm absolute z-80 right-8 bottom-12 p-2 bg-white">
            Log out
        </div>
        )
    }
    return (
        <>
            <div className="hidden md:flex flex-col justify-between md:w-60 lg:60 border-r border-gray-200 min-h-screen fixed shadow-sm py-15 z-100">
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
                <div className="">
                    <SidebarItem icon={<UserIcon size="md" />} text={"Log out"} size="md" onClick={logout}/>
                </div>
            </div>

            <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-sm z-50 ">
                <div className="flex justify-around p-2">
                    {items.map(({ text, icon, type }) => (
                        <div key={text} onClick={() => onSelectType(type)}>
                            <SidebarItem icon={icon} active={type === activeType} size="sm" />
                        </div>
                    ))}
                     <SidebarItem icon={<UserIcon size="md" />} size="md" onClick={logout} onmouseover={() => setIsMouseOver(true)}
                     onmouseleave={() => setIsMouseOver(false)}/>
                     {isMouseOver && <ShowLogout />}
                </div>
            </div>
        </>
    )
}
