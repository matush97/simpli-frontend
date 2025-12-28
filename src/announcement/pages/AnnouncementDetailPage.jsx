import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAnnouncement} from "../../services/announcement";
import {listCategory} from "../../services/category";
import AnnouncementForm from "../components/AnnouncementForm";

function AnnouncementDetailPage() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [announcement, setAnnouncement] = useState({});
    const [categoryList, setCategoryList] = useState([{value: "", label: ""}]);

    async function loadData() {
        setLoading(true)
        try {
            const categories = await listCategory();
            setCategoryList(categories)

            const data = await getAnnouncement(id);
            setAnnouncement(data)
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
        loading ? <p>Loading...</p> : <AnnouncementForm announcement={announcement} categoryList={categoryList}/>
    );
}

export default AnnouncementDetailPage;