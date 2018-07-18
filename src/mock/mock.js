import Mock from 'mockjs';
import data from './data';
Mock.mock('/data',()=>{
    return data
})