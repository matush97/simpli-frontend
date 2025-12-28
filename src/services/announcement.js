import {baseApi} from "./base";

export function listAnnouncements() {
    return baseApi.get("api/announcement/list").then(res => res.data)
}

export function getAnnouncement(id) {
    return baseApi.get(`api/announcement/get/${id}`).then(res => res.data)
}