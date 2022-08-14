import logo from './logo.svg';
import './pages/UserFrame/App.css';
import UserMenu from "./components/Menu";
import {Route , Routes} from "react-router-dom";
import VideoList from "./pages/VidoList";
import ActivePage from "./pages/ActivePage";
import UserCenter from "./pages/UserCenter";
import VideoPage from "./pages/VideoPage";
import IndexPage from "./pages/IndexPage";
import UserFrame from "./pages/UserFrame";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/user" element={<UserFrame/>}>
                <Route path="/user/center" element={<UserCenter/>}/>
                <Route path="/user/video" element={<VideoPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
