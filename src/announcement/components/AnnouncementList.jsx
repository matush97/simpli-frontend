import AnnouncementItem from "./AnnouncementItem";

function AnnouncementList({announcements}) {
    if (!announcements.length) {
        return <p>No announcements found</p>;
    }

    return (
        <div>
            {announcements.map((item) => (
                <AnnouncementItem key={item._id} announcement={item}/>
            ))}
        </div>
    );
}

export default AnnouncementList;