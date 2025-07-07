import {useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { API_URL } from '../../config'

const api_url = `${API_URL}`;

type ContentType = "document" | "tweet" | "youtube" | "";

export interface ContentPayloadProps {
    title: string,
    link: string,
    type: ContentType,
    tags: string[],
    timeStamp: string,
    _id : string
}

export function useContentQuery(){
    return useQuery<ContentPayloadProps[]>({
        queryKey: ['cardContents'],
        queryFn: async() => {
            const response = await axios.get(`${api_url}/content`, {
                headers: {
                    "authorization": localStorage.getItem("authorization")
                }
            })
            // console.log(response)
            return response.data;
        }
    })
}

