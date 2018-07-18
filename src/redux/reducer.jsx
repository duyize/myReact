import {
    ADDUSER,
    DELETEID,
    CHANGEINFO,
    INITDATA,
    PUSHDETAIL,
    SUBUSER
} from './type';

let initState = {
    pwd:123,
    obj: {
        id: '',
        username: '',
        money:''
    },
    arr: [],
    detailArr : [],
    subArr:[]
};

export default (state = initState, actions) => {
    switch (actions.type) {
        case "INITDATA": {
            state.arr = actions.obj;
            return { ...state};
        };
        case "ADDUSER": {
            state.arr.push(actions.obj)
            return { ...state};
        };
        case "DELETEID": {
            state.arr.splice(actions.index,1);
            return { ...state,arr:[...state.arr]};
        };
        case "CHANGEINFO": {
           state.arr[actions.index].username = actions.username;
            return { ...state,arr:[...state.arr]};
        };
        case "PUSHDETAIL": {
            console.log(state.arr[actions.index])
            return { ...state,detailArr:[...state.arr[actions.index]]};
        };
        case "SUBUSER": {
            state.subArr.push(actions.obj);
            
            return { ...state};
        };
        default: {
            return state;
        };
    };
};
