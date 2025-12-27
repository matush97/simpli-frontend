

function AnnouncementItem({announcement}) {
    return (
        <div style={{ border: '1px solid #ddd', marginBottom: '8px', padding: '8px' }}>
            <h3>{announcement.title}</h3>
            <p>{announcement.body}</p>
            <small>{announcement.category}</small>
        </div>
    );
}

export default AnnouncementItem;