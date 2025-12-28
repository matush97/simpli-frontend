import {baseApi} from "./base";

export function listCategory() {
    return baseApi.get("api/category/list").then(res => res.data)
}