import BeatGTApi from "./api";

export function CreateUser(data) {
    return BeatGTApi.post('/registration/', JSON.stringify(data))
}

export function AuthUser(data) {
    return BeatGTApi.post('/auth_user/', JSON.stringify(data))
}

export function GetComponent(id = 0, type = '') {
    return BeatGTApi.get(`/component/?id=${id}&type=${type}`);
}

export function GetAssembly(id = 0) {
    return BeatGTApi.get(`/assembly/?id=${id}`);
}

export function postComponent(type = '', row = {}) {
    return BeatGTApi.post('/create_component/', JSON.stringify({ type, row }));
}

export function assembLike(data){
    return BeatGTApi.post('/assembly_like/', JSON.stringify(data))
}