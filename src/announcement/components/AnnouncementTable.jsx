import {useNavigate} from "react-router-dom";

import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {Button} from "primereact/button";

function AnnouncementTable({announcements, loading}) {
    const navigate = useNavigate();

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

    function getCategories(rowData) {
        return rowData.category.map((item, index) => {
            if (index + 1 === rowData.category.length){
                return item.label
            }
            return item.label + ", "
        })
    }

    return (
        <DataTable value={announcements} paginator rows={10} loading={loading}>
            <Column field="title" header="Title"/>
            <Column field="publicationDate" header="Publication date"/>
            <Column field="lastUpdate" header="Last update"/>
            <Column field="category" header="Categories" body={getCategories}/>
            <Column body={actionTemplate} header="Actions"/>
        </DataTable>
    )
}

export default AnnouncementTable;