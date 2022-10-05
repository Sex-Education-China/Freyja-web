import logo from './logo.svg';
import './pages.mui/UserFrame/App.css';
import UserMenu from "./components.mui/Menu";
import ActivePage from "./pages.mui/ActivePage";
import UserCenter from "./pages.mui/UserCenter";
import VideoList from "./pages/VideoList";
import IndexPage from "./pages/IndexPage";
import UserFrame from "./pages.mui/UserFrame";

import AnnouncePage from "./pages.mui/AnnnouncePage";
import IndexFrame from "./pages/IndexFrame";
import {Route, Routes} from "react-router-dom";
import VideoPage from "./pages/VideoPage";
function App() {
  return (
    <div className="App"
         style={{
             width:'100%',
             height: '100%',
         }}
    >
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/user" element={<IndexFrame/>}>
                <Route path="/user/user" element={<UserCenter/>}/>
                <Route path="/user/video" element={<VideoList/>}/>
                <Route path="/user/video/:id" element={<VideoPage/>}/>
                <Route path={'/user/announce'} element={<AnnouncePage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
