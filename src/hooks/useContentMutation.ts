import { useMutation } from '@tanstack/react-query'
import axios from 'axios';
import { API_URL } from '../../config'

const api_url = `${API_URL}`;

interface ContentPayloadProps {
    title: string,
    link: string,
    type: string,
    tags: string
}

export function useContentMutation(onSuccess: (data: any) => void,
    onError: (error: any) => void
) {
    return useMutation({
        mutationFn: async ({ title, type, link, tags }: ContentPayloadProps) => {
            const res = await axios.post(`${api_url}/content`, { title, type, link, tags });
            return res;
        },
        onSuccess,
        onError
    })
}
