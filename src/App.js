import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnnouncementListPage from "./announcement/pages/AnnouncementListPage";
import AnnouncementDetailPage from "./announcement/pages/AnnouncementsDetailPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AnnouncementListPage />}/>
                <Route path="/announcement/:id" element={<AnnouncementDetailPage />}  />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
