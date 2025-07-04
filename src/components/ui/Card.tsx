import {type ReactElement} from 'react'
import { DeleteIcon } from "../../icons/DeleteIcon"
import { ShareIcon } from '../../icons/ShareIcon'
import { TweetIcon } from '../../icons/TweetIcon'
import { VideoIcon } from '../../icons/VideoIcon'
import { DocumentIcon } from '../../icons/DocumentIcon'
import { LinkIcon } from '../../icons/LinkIcon'
import { TagIcon } from '../../icons/TagIcon'
import Youtube from '../ui/linkUrls/Youtube';
import Twitter from '../ui/linkUrls/Twitter'

type ContentType = "document" | "tweet" | "youtube"
interface CardProps{
    title: string;
    type: ContentType;
    link: string;

}
const contentStyle: Record<ContentType, ReactElement> = {
    "document" : <DocumentIcon size="sm" />,
    "youtube" : <VideoIcon size="sm"/>,
    "tweet" : <TweetIcon size="sm"/>,
}

export function Card({title, type, link}: CardProps) {
    return (
        <div className="flex flex-col justify-between rounded-md bg-blue text-slate-600 p-4 border w-72 border-gray-100 shadow-sm min-w-72 min-h-72 max-w-80">
            <div className="flex justify-between max-w-72">
                <div className="flex items-center gap-2">
                {contentStyle[type]}
                    <h3 className="font-medium">{title}</h3>
                </div>
                <div className="flex items-center gap-2">
                    <ShareIcon size="sm" />
                    <DeleteIcon size="sm" />
                </div>
            </div>
            <div className="pt-4 overflow-hidden max-w-full max-h-96 overflow-y-auto min-h-72">
                {
                    type === "youtube" && 
                    <Youtube ID="vPvnzWoK24Q?si=skGm-9swdNShVETl"/>
                }
                {
                    type === "tweet" && 
                    <Twitter ID="1940634590508716263" username="akshad_999" />
                }
            </div>
            
            <div className="flex flex-col text-sm pt-4 border-t border-gray-200">
                <div>
                    Tags
                </div>
                <div>Added On 03/07/2025</div>
            </div>
        </div>
    )
}

       {/* {/* <iframe className="w-full" 
                src="https://www.youtube.com/embed/ZXAcTToLy_Y?si=bFB7ul3EwOQTFZtQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
                    </iframe>
                <blockquote
                    className="twitter-tweet w-full max-w-full">
                    <a href="https://twitter.com/arjvnz/status/1939984941674111457?ref_src=twsrc%5Etfw"></a>
                </blockquote> */}

                {/* <blockquote className="twitter-tweet"><a href="https://twitter.com/akshad_999/status/1940634590508716263?ref_src=twsrc%5Etfw"></a></blockquote> 
                 */} 