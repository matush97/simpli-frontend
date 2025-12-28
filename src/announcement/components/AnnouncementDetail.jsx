import Select from 'react-select'
import {useState} from "react";

function AnnouncementDetail(props) {
    const {announcement, categoryList} = props;
    const [selectedOption, setSelectedOption] = useState(null);
    // FIXME toto pokracovat


    return (
        <div>
            <h2>{announcement.title}</h2>
            <p>{announcement.content}</p>
            <p>Category: </p>
            <Select
                options={categoryList}
                value={selectedOption}
                onChange={setSelectedOption}
                isMulti
            />
        </div>
    )
}

export default AnnouncementDetail;