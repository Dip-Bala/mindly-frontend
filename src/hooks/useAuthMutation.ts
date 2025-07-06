import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {API_URL} from '../../config'

interface AuthPayload{
    username: string,
    password: string
}
const api_url = `${API_URL}/auth`;
console.log(api_url);

export function useSignupMutation(
    onSuccess : (data: any) => void,
    onError : (error: any) => void
){
    return useMutation({
        mutationFn: async ({username, password}: AuthPayload) => {
            const res = await axios.post(`${api_url}/signup`, {username, password});
            return res;
        },
        onSuccess,
        onError
    })
}
export function useSigninMutation(
    onSuccess : (data: any) => void,
    onError : (error: any) => void
){
    return useMutation({
        mutationFn: async ({username, password}: AuthPayload) => {
            const res = await axios.post(`${api_url}/signin`, {username, password});
            return res;
        },
        onSuccess,
        onError
    })
}