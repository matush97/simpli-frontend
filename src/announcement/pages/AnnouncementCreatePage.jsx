import {useEffect, useState} from "react";
import {listCategory} from "../../services/category";
import AnnouncementForm from "../components/AnnouncementForm";

function AnnouncementCreatePage() {
    const [loading, setLoading] = useState(false);
    const [categoryList, setCategoryList] = useState([{value: "", label: ""}]);

    async function loadData() {
        setLoading(true)
        try {
            const categories = await listCategory();
            setCategoryList(categories)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    }, []);

    return (
        loading ? <p>Loading...</p> : <AnnouncementForm categoryList={categoryList}/>
    );
}

export default AnnouncementCreatePage;