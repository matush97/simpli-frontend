import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';

import {listAnnouncements} from "../../services/announcement";

function AnnouncementsPage() {
    const [announcements, setAnnouncements] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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

    console.log("announcements", announcements);

    function actionTemplate(rowData) {
        return (
            <Button
                icon="pi pi-pencil"
                rounded
                text
                onClick={() => navigate(`/announcement/${rowData._id}`)}
            />
        );
    }

    return (
        <div>
            <h1>Announcements</h1>

            <DataTable value={announcements} paginator rows={10} loading={loading}>
                <Column field="title" header="Title"/>
                <Column field="publicationDate" header="Publication date"/>
                <Column field="lastUpdate" header="Last update"/>
                <Column field="category" header="Categories"/>
                <Column body={actionTemplate} header="Actions"/>
            </DataTable>
        </div>
    )
}

export default AnnouncementsPage;