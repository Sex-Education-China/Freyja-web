import logo from './logo.svg';
import './App.css';
import UserMenu from "./components/Menu";
import {Route , Routes} from "react-router-dom";
import VideoList from "./pages/VidoList";
import ActivePage from "./pages/ActivePage";
import TopBar from "./components/TopBar";
import UserCenter from "./pages/UserCenter";
import VideoPage from "./pages/VideoPage";
function App() {
  return (
    <div className="App">
        <div></div>
        <div >
            <TopBar id={'top'}/>
        </div>
      <div id={'left'} >
        <UserMenu style={{
            position:'fixed',
            top:'64px',
        }}/>
      </div>
      <div id={'right'}>
          <div id={'above'}></div>
          <div id={'content'} style={{
              marginTop: '64px',
          }}>
              <Routes>
                  <Route path="/video" element={<VideoList />} />
                  <Route path={"/active"} element={<ActivePage />} />
                  <Route path={'/user'} element={<UserCenter />} />
                  <Route path={'/video/:id'} element={<VideoPage />} />
              </Routes>
          </div>

      </div>
        <div id={'clear'}></div>
    </div>
  );
}

export default App;
