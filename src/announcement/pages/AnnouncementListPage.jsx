import {useEffect, useState} from "react";

import AnnouncementsTable from  "../components/AnnouncementTable";
import {listAnnouncements} from "../../services/announcement";

function AnnouncementListPage() {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadData() {
        setLoading(true)
        try {
            const data = await listAnnouncements();
            setAnnouncements(data)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <>
            <h1>Announcements</h1>

            <AnnouncementsTable announcements={announcements} loading={loading} />
        </>
    )
}

export default AnnouncementListPage;