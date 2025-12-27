import {baseApi} from "./base";

export function listAnnouncements(options) {
    const {search, category} = options;

    const params = {};
    if (search) params.search = search;
    if (category) params.category = category;

    return baseApi.get("api/announcement/list", {params}).then(res => res.data)
}