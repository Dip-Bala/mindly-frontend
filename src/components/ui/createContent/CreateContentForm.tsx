import { type FormEvent } from 'react'
import { Button } from '../Button'
import { Input } from "../Input"
import { useContentPayload } from '../../../hooks/useContentPayload'
import { TweetIcon } from '../../../icons/TweetIcon';
import { VideoIcon } from '../../../icons/VideoIcon'
import { DocumentIcon } from '../../../icons/DocumentIcon';
import { toast } from 'react-toastify'
import { useContentMutation } from '../../../hooks/useContentMutation'
import { CancelIcon } from '../../../icons/CancelIcon'
import {useQueryClient} from '@tanstack/react-query'
import { useLoading } from '../../../hooks/useLoadingProvider';
interface CreateContentFormProps {
    onClose: () => void;
}
export function CreateContentForm({ onClose }: CreateContentFormProps) {
    const queryClient = useQueryClient();
    const {show, hide} = useLoading();
    const {
        titleRef,
        linkRef,
        tagsRef,
        typeRef
    } = useContentPayload();

    const contentMutation = useContentMutation((data) => {
        // console.log(data);
        hide();
        toast.success("Thought saved to Mindly!");
        queryClient.invalidateQueries({ queryKey: ['cardContents'] });
    },
        (err) => {
            hide();
            toast.error(err.response.data)
        });

    function isValidUrl(link: string): boolean {
        try {
            new URL(link); // throws if invalid
            return true;
        } catch (_) {
            return false;
        }
    }

    function tagsArray(tags: string) {
        return tags.split(" ").map(t => t.slice(1));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        show();
        const title = titleRef.current?.value || "";
        const link = linkRef.current?.value || "";
        const tags = tagsRef.current?.value || "";
        const type = typeRef.current || "";
        const tagsArr = tagsArray(tags);
        // console.log(title, link, tagsArr, type);

        if (title === "" || link === "") {
            toast.error("Title and Link must be provided");
            return;
        }
        if (!isValidUrl(link)) {
            toast.error("Enter Valid URL");
            return;
        }
        contentMutation.mutate({
            title: title,
            link: link,
            tags: tagsArr,
            type: type
        })

    }
    return (
        <>
            <div onClick={onClose} className="flex justify-end cursor-pointer">
                <CancelIcon size="md" />
            </div>
            <form onSubmit={(e) => {
                handleSubmit(e);
                onClose();
            }
            } className="flex flex-col gap-2 w-full">
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-indigo-600">Title</label><Input placeholder={"Title"} reference={titleRef} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-indigo-600">Link</label><Input placeholder={"Link"} reference={linkRef} />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-indigo-600">Type</label>
                    <div className="flex gap-2">
                        <Button variant="secondary" text="" size="sm" startIcon={<TweetIcon size="md" />} onClick={() => typeRef.current = "tweet"} type="button" />
                        <Button variant="secondary" text="" size="sm" startIcon={<VideoIcon size="md" />} onClick={() => typeRef.current = "youtube"} type="button" />
                        <Button variant="secondary" text="" size="sm" startIcon={<DocumentIcon size="md" />} onClick={() => typeRef.current = "document"} type="button" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-indigo-600">Tags</label><Input placeholder={"Tags"} reference={tagsRef} />
                </div>
                <Button variant="secondary" text="Submit" size="md" fullWidth type="submit" />
            </form>
        </>
    )
}
