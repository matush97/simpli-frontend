import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAnnouncement} from "../../services/announcement";
import {listCategory} from "../../services/category";
import AnnouncementDetail from "../components/AnnouncementDetail";

function AnnouncementsDetailPage() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [announcement, setAnnouncement] = useState({});
    const [categoryList, setCategoryList] = useState([{value: "", label: ""}]);

    async function loadData() {
        setLoading(true)
        try {
            const data = await getAnnouncement(id);
            setAnnouncement(data)

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
    }, [id]);

    return (
        loading ? <p>Loading...</p> : <AnnouncementDetail announcement={announcement} categoryList={categoryList}/>
    );
}

export default AnnouncementsDetailPage;