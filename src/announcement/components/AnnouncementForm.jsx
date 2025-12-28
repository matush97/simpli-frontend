import Select from 'react-select'
import {useState} from "react";
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from 'primereact/button';
import {isoToFormatDate, validateDate} from "../../utils";
import {useNavigate, useParams} from "react-router-dom";
import {createAnnouncement, updateAnnouncement} from "../../services/announcement";

function AnnouncementForm(props) {
    const {announcement, categoryList} = props;

    const {id} = useParams();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(announcement?.category);

    const [form, setForm] = useState({
        title: announcement?.title ?? "",
        content: announcement?.content ?? "",
        publicationDate: announcement?.publicationDate ? isoToFormatDate(announcement.publicationDate) : ""
    })


    async function handleSubmit() {
        if (!form.title || !form.content || !selectedCategory?.length || !form.publicationDate) {
            alert('All fields are required');
            return;
        }

        if (!validateDate(form.publicationDate)) {
            alert('Date must be in format MM/DD/YYYY HH:mm');
            return;
        }

        const publicationDateIso = new Date(form.publicationDate);
        const inputObject = {
            ...form,
            category: selectedCategory,
            publicationDate: publicationDateIso
        };

        if (id) {
            inputObject.id = id;
            await updateAnnouncement(inputObject)
        } else {
            await createAnnouncement(inputObject)
        }

        return navigate('/');
    }

    return (
        <div>
            <h2>{id ? "Edit the announcement" : "Create the announcement"}</h2>

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
                onChange={(e) => setForm({...form, publicationDate: e.target.value})}
            />

            <Button label={"Publish"} onClick={handleSubmit}/>
        </div>
    )
}

export default AnnouncementForm;