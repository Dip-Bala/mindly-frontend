import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {API_URL } from '../../config'

// const api_url = API_URL + "/content"
interface contentIdProp{
    contentId: string
}

export function useDeleteContent(
    onSuccess: () => void,
    onError: () => void
){
    return useMutation({
        mutationFn: async({contentId}: contentIdProp) => {
            const response = await axios.delete(`${API_URL}/content/${contentId}`, {
                headers: {                       
                    "authorization": localStorage.getItem("authorization")
                }
            })
            console.log("response "+ response )
            return response;
        },
        onSuccess,
        onError
    })
}