import {baseApi} from "./base";

export function updateAnnouncement(data) {
    return baseApi.patch("api/announcement/update", data).then(res => res.data)
}

export function listAnnouncements() {
    return baseApi.get("api/announcement/list").then(res => res.data)
}

export function getAnnouncement(id) {
    return baseApi.get(`api/announcement/get/${id}`).then(res => res.data)
}