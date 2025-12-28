import Select from 'react-select'
import {useState} from "react";
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import {isoToFormatDate, validateDate} from "../../utils";
import {useNavigate, useParams} from "react-router-dom";

function AnnouncementForm(props) {
    const {announcement, categoryList} = props;

    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(announcement.category ?? [{value: "", label: ""}]);

    const [form, setForm] = useState({
        title: announcement.title ?? "",
        content: announcement.content ?? "",
        publicationDate: announcement.publicationDate ? isoToFormatDate(announcement.publicationDate) : ""
    })


    function handleSubmit() {
        if (!form.title || !form.content || !selectedCategory?.length || !form.publicationDate) {
            alert('All fields are required');
            return;
        }

        if (!validateDate(form.publicationDate)) {
            alert('Date must be in format MM/DD/YYYY HH:mm');
            return;
        }

        const method = "PATCH"
        const url = `http://localhost:3001/api/announcement/update`;
        const publicationDateIso = new Date(form.publicationDate);
        const inputObject = {
            ...form,
            id,
            category: selectedCategory,
            publicationDate: publicationDateIso
        };

        fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputObject)
        }).then(() => navigate('/'));

    }

    return (
        <div>
            <h2>Edit the announcement</h2>

            <h3>Title</h3>
            <InputText
                value={form.title}
                onChange={(e) => setForm({...form, title: e.target.value})}
            />

            <h3>Content</h3>
            <InputTextarea
                value={form.content}
                onChange={(e) => setForm({...form, content: e.target.value})}
            />

            <h3>Category</h3>
            <Select
                value={selectedCategory}
                options={categoryList}
                onChange={setSelectedCategory}
                isMulti
            />

            <h3>Publication date</h3>
            <InputText
                value={form.publicationDate}
                placeholder="MM/DD/YYYY HH:mm"
                onChange={(e) => setForm({ ...form, publicationDate: e.target.value })}
            />

            <Button label={"Publish"} onClick={handleSubmit} />
        </div>
    )
}

export default AnnouncementForm;