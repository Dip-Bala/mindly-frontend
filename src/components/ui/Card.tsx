import { DeleteIcon } from "../../icons/DeleteIcon"
import { ShareIcon } from '../../icons/ShareIcon'
import { TweetIcon } from '../../icons/TweetIcon'
import { VideoIcon } from '../../icons/VideoIcon'
import { DocumentIcon } from '../../icons/DocumentIcon'
import { LinkIcon } from '../../icons/LinkIcon'
import { TagIcon } from '../../icons/TagIcon'

type ContentType = {
    type: "document" | "tweet" | "video"
}
// interface CardProps{
//     title?: string;
//     type: ContentType;


// }
export function Card() {
    return (
        <div className="rounded-md bg-blue text-slate-600 p-4 border w-72  border-gray-100 shadow-sm">
            <div className="flex justify-between max-w-72">
                <div className="flex items-center gap-2">
                    <DocumentIcon size="sm" />
                    <h3 className="font-medium">Hey There</h3>
                </div>
                <div className="flex items-center gap-2">
                    <ShareIcon size="sm" />
                    <DeleteIcon size="sm" />
                </div>
            </div>

            <div className="pt-4 overflow-hidden max-w-full max-h-96 overflow-y-auto">
                {/* <iframe className="w-full" src="https://www.youtube.com/embed/ZXAcTToLy_Y?si=bFB7ul3EwOQTFZtQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe> */}

                <blockquote
                    className="twitter-tweet w-full max-w-full">
                    <a href="https://twitter.com/arjvnz/status/1939984941674111457?ref_src=twsrc%5Etfw"></a>
                </blockquote>

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