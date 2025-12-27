import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnnouncementsPage from "./announcement/pages/AnnouncementsPage";
import AnnouncementDetailPage from "./announcement/pages/AnnouncementsDetailPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AnnouncementsPage />}/>
                <Route path="/announcement/:id" element={<AnnouncementDetailPage />}  />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
