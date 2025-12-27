import {useEffect, useState} from "react";
import {listAnnouncements} from "../../services/announcement";
import AnnouncementList from "../components/AnnouncementList";

function AnnouncementsPage() {
    const [announcements, setAnnouncements] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);

    async function loadData() {
        setLoading(true)
        try {
            const data = await listAnnouncements({search, category});
            setAnnouncements(data)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData();
    }, [search, category])

    return (
        <div>
            <h1>Announcements</h1>

            {loading ? <p>Loading...</p> : <AnnouncementList announcements={announcements}/>}
        </div>
    )
}

export default AnnouncementsPage;