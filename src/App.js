import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnnouncementListPage from "./announcement/pages/AnnouncementListPage";
import AnnouncementDetailPage from "./announcement/pages/AnnouncementDetailPage";
import AnnouncementsDetailPage from "./announcement/pages/AnnouncementDetailPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AnnouncementListPage />}/>
                <Route path="/announcement/:id" element={<AnnouncementDetailPage />}  />
                <Route path="/announcement" element={<AnnouncementsDetailPage />}  />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
