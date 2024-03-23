import BeatGTApi from "./api";

export function CreateUser(data){
    return BeatGTApi.post('/registration/', JSON.stringify(data))
}

export function AuthUser(data){
    return BeatGTApi.post('/auth_user/', JSON.stringify(data))
}

export function GetComponent(id = 0, type = ''){
    return BeatGTApi.get(`/component/?id=${id}&type=${type}`);
}