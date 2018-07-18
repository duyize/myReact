import {
    ADDUSER,
    DELETEID,
    CHANGEINFO,
    INITDATA,
    PUSHDETAIL,
    SUBUSER
} from './type';

export default {
    [ADDUSER](text){
        return {
            type:ADDUSER,
            text:text
        };
    },
    [DELETEID](text){
        return {
            type:DELETEID,
            text:text
        };
    },
    [CHANGEINFO](text){
        return {
            type:CHANGEINFO,
            text:text
        };
    },
    [INITDATA](text){
        return {
            type:INITDATA,
            text:text
        };
    },
    [PUSHDETAIL](text){
        return {
            type:PUSHDETAIL,
            text:text
        };
    },
    [SUBUSER](text){
        return {
            type:SUBUSER,
            text:text
        };
    }
    
};
