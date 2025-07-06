import {type FormEvent} from 'react'
import {Button} from '../Button'
import {Input} from "../Input"
import {useContentPayload} from '../../../hooks/useContentPayload'
import { TweetIcon } from '../../../icons/TweetIcon';
import {VideoIcon} from '../../../icons/VideoIcon'
import { DocumentIcon } from '../../../icons/DocumentIcon';
export function CreateContentForm(){
    const {titleRef, linkRef, typeRef, tagsRef} = useContentPayload();
    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        // const title = titleRef.current?value;
        // const link = linkRef.current?value;
        // const type = typeRef.current?value;
        // const tags = tagsRef.current?value;
        // console.log(title)
    }
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <div className="flex flex-col">
            <label className="text-sm font-semibold text-purple-500">Title</label><Input placeholder={"Title"} reference={titleRef} /> 
            </div>
            <div className="flex flex-col">
            <label className="text-sm font-semibold text-purple-500">Link</label><Input placeholder={"Link"} reference={linkRef} /> 
            </div>
            <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-purple-500">Type</label>
            <div className="flex gap-2">
            <Button variant="primary" text="" size="sm" startIcon={<TweetIcon size="md"/>}/>
            <Button variant="primary" text="" size="sm" startIcon={<VideoIcon size="md"/>}/>
            <Button variant="primary" text="" size="sm" startIcon={<DocumentIcon size="md"/>}/>

            </div>
            </div>
            <div className="flex flex-col">
            <label className="text-sm font-semibold text-purple-500">Tags</label><Input placeholder={"Tags"} reference={tagsRef} /> 
            </div>
            <Button variant="secondary" text="Submit" size="md" fullWidth/>
        </form>
    )
}
