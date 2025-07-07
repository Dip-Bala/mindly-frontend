import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {API_URL} from '../../config'

export function useShareMindMutation(
    onSuccess: (d: any) => void,
    onError: (e: any) => void
){
    return useMutation({
        mutationFn: async(share: boolean) => {
            console.log("ghjk")
            const response = await axios.post( `${API_URL}/mind/share`, {share}, {
                headers: {
                    "authorization" : localStorage.getItem("authorization")
                }
            })
            return response.data;
        },
        onSuccess,
        onError

    })
}