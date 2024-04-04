/* eslint-disable import/prefer-default-export */
import { useMutation } from "react-query";
import {fetchAddUserMood} from '../api/fetchUserMood'

export const useAddUserMoodMutation = () => {
    return useMutation(['userMood'],fetchAddUserMood,{
        onSuccess: () => {
            console.log('사용자 기분 등록에 성공하였습니다..')
        }
    })
}