import axios from 'axios';
import { PORT } from './port';
export const data = ()=>{
    return axios.get(PORT+'/data');
}
export const submitSingleUser = (data)=>{
    PORT = 'http://localhost:8000';
    return axios.get(PORT+'/submitsingleUser',data);
}
export const delUserApi = (userid)=>{
    return axios.get(PORT+'/delUserApi',{userid});
}
export const editUserApi = (userid,username)=>{
    return axios.get(PORT+'/editUserApi',{userid,username});
}
