import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnnouncementListPage from "./announcement/pages/AnnouncementListPage";
import AnnouncementDetailPage from "./announcement/pages/AnnouncementDetailPage";
import AnnouncementCreatePage from "./announcement/pages/AnnouncementCreatePage";

import {useEffect} from "react";
import {socket} from "./socket";


function App() {
    useEffect(() => {
        const handler = (data) => {
            alert(`New announcement published: ${data.title}`);
        };

        socket.on("announcement:new", handler);

        return () => {
            socket.off("announcement:new", handler);
        };
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AnnouncementListPage />}/>
                <Route path="/announcement/:id" element={<AnnouncementDetailPage />}  />
                <Route path="/announcement" element={<AnnouncementCreatePage />}  />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
