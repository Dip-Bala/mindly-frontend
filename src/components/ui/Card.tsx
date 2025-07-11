import { type ReactElement, useMemo } from "react";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { TweetIcon } from "../../icons/TweetIcon";
import { VideoIcon } from "../../icons/VideoIcon";
import { DocumentIcon } from "../../icons/DocumentIcon";
import { useDeleteContent } from '../../hooks/useDeleteContent';
import Youtube from "../ui/linkUrls/Youtube";
import Twitter from "../ui/linkUrls/Twitter";
import { toast } from 'react-toastify';
import {useQueryClient} from '@tanstack/react-query'
import { type ContentType } from '../../types/types';
import { UserIcon } from "../../icons/UserIcon";
import { HomeIcon } from "../../icons/HomeIcon";


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
    logout: <UserIcon size="md"/>,
    "" : <HomeIcon size="md"/>
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
        <div className="flex flex-col justify-between rounded-md bg-blue p-4 text-slate-600 border border-gray-100 shadow-sm min-w-76 w-80 bg-white h-auto min-h-50 max-h-full">
            <div className="flex justify-between items-center w-full ">
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

            <div className="my-2 overflow-hidden overflow-y-auto max-h-60">
                {type === "youtube" && youtubeID && <Youtube ID={youtubeID} />}
                {type === "tweet" && tweetInfo && (
                    <Twitter ID={tweetInfo.tweetId} username={tweetInfo.username} />
                )}
            </div>

            <div className="flex flex-col gap-2 text-sm ">
                <div className="flex flex-wrap gap-2 ">
                    {
                        tags.map(tag => {
                            return <p key={tag} className="bg-purple-300 text-purple-600 font-medium rounded-lg p-1 cursor-pointer">#{tag}</p>
                        })
                    }
                </div>
                <div className="">Added on {formattedDate}</div>
            </div>
        </div>
    );
}

