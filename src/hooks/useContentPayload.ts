import {useRef} from 'react';

export function useContentPayload(){
    const titleRef  = useRef<HTMLInputElement | null>(null);
    const linkRef  = useRef<HTMLInputElement | null>(null);
    const typeRef  = useRef<HTMLInputElement | null>(null);
    const tagsRef  = useRef<HTMLInputElement | null>(null);
    return {titleRef, linkRef, typeRef, tagsRef};
}