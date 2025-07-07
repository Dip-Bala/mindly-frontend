import { type ReactElement, useMemo } from "react";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { TweetIcon } from "../../icons/TweetIcon";
import { VideoIcon } from "../../icons/VideoIcon";
import { DocumentIcon } from "../../icons/DocumentIcon";
import { useDeleteContent } from '../../hooks/useDeleteContent';
import { LinkIcon } from "../../icons/LinkIcon";
import { TagIcon } from "../../icons/TagIcon";
import Youtube from "../ui/linkUrls/Youtube";
import Twitter from "../ui/linkUrls/Twitter";
import { toast } from 'react-toastify';
import {useQueryClient} from '@tanstack/react-query'
type ContentType = "document" | "tweet" | "youtube";

interface CardProps {
    title: string;
    type: ContentType;
    link: string;
    timeStamp: string;
    tags: string[],
    contentId: string
}

const contentStyle: Record<ContentType, ReactElement> = {
    document: <DocumentIcon size="md" />,
    youtube: <VideoIcon size="md" />,
    tweet: <TweetIcon size="md" />,
};

function extractYouTubeId(url: string): string | null {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.searchParams.get("v");
    } catch {
        return null;
    }
}

function extractTweetDetails(url: string): { username: string; tweetId: string } | null {
    const regex = /x\.com\/([^\/]+)\/status\/(\d+)/;
    const match = url.match(regex);
    if (match && match.length === 3) {
        return {
            username: match[1],
            tweetId: match[2],
        };
    }
    return null;
}

export function Card({ title, type, link, tags, timeStamp, contentId }: CardProps) {
    const queryClient = useQueryClient();
    const youtubeID = useMemo(() => {
        return type === "youtube" ? extractYouTubeId(link) || "" : "";
    }, [type, link]);

    const tweetInfo = useMemo(() => {
        return type === "tweet" ? extractTweetDetails(link) : null;
    }, [type, link]);

    const formattedDate = new Date(timeStamp).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    const deleteMutation = useDeleteContent(
        () => {
            toast.success("Content deleted");
        },
        () => {
            console.log("err")
        }
    );
    function deleteContent(id: string) {
        queryClient.invalidateQueries({ queryKey: ['cardContents'] });
        deleteMutation.mutate({ contentId: id });
      }
    return (
        <div className="flex flex-col justify-between rounded-md bg-blue text-slate-600 border border-gray-100 shadow-sm min-w-80 max-w-80 bg-white h-auto">
            <div className="flex justify-between p-4 items-center w-full ">
                <div className="flex items-center gap-3">
                    {contentStyle[type]}
                    <h3 className="font-medium text-sm">{title}</h3>
                </div>
                <div className="flex items-center gap-2">
                    <ShareIcon size="md" />
                    <div onClick={() => deleteContent(contentId)}>
                        <DeleteIcon size="md" />
                    </div>
                </div>
            </div>

            <div className=" overflow-hidden overflow-y-auto min-h-50 max-h-80">
                {type === "youtube" && youtubeID && <Youtube ID={youtubeID} />}
                {type === "tweet" && tweetInfo && (
                    <Twitter ID={tweetInfo.tweetId} username={tweetInfo.username} />
                )}
            </div>

            <div className="flex flex-col gap-2 text-sm p-4">
                <div className="flex flex-wrap gap-2 ">
                    {
                        tags.map(tag => {
                            return <p key={tag} className="bg-purple-200 text-purple-600 font-medium rounded-lg p-1 ">#{tag}</p>
                        })
                    }
                </div>
                <div className="">Added on {formattedDate}</div>
            </div>
        </div>
    );
}

