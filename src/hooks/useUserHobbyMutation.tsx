/* eslint-disable import/prefer-default-export */
import { useMutation, } from 'react-query';
import {fetchAddUserHobby} from '../api/fetchUserHobby'

export const useAddUserHobbyMutation = () => {
    return useMutation(fetchAddUserHobby,{
        onSuccess: () => {
            console.log('사용자 취미 등록 완료')
        }
    })
}