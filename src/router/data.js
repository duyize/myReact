import Index from '../components/index.jsx';
import UserInfo from '../components/UserInfo.jsx';
import Submit from '../components/chileren/submit.jsx';
import Account from '../components/chileren/account.jsx';
import Detail from '../components/chileren/detail.jsx';
import Home from '../components/chileren/home.jsx';


export  const config = [
    {
        path : '/index',
        component:Index,
        children:[
            {
                title:'首页',
                path:'/home',
                component:Home
            },{
                title:'详情',
                path:'/detail',
                component:Detail
            },{
                title:'提交',
                path:'/submit',
                component:Submit
            },{
                title:'结算',
                path:'/account',
                component:Account
            }
        ]
    },
    {
        path : '/userinfo',
        component:UserInfo
    }
];