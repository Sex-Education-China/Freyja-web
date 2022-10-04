import React, {Component} from 'react';
import TopBar from "../../components.mui/TopBar";
import UserMenu from "../../components.mui/Menu";
import {Outlet, Route, Routes} from "react-router-dom";
import VideoList from "../VidoList";
import ActivePage from "../ActivePage";
import UserCenter from "../UserCenter";
import VideoPage from "../VideoPage";
import './App.css'
class UserFrame extends Component {
    render() {
        return (
            <div>
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
                        <Outlet/>
                    </div>

                </div>
                <div id={'clear'}></div>
            </div>
        );
    }
}

export default UserFrame;