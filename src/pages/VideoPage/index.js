import React, {Component, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

function VideoPage()   {
    const params = useParams();
    const [state,setState] = React.useState({});
    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/video/get?id=7`).then(res => {
            setState(res.data);
        })
        console.log('render')
    },[])
    return (
        <ReactPlayer  url={'http://127.0.0.1:1987/proxy/' + state.videoLink} config={{
            file: {
                forceHLS: true,
            }
        }}/>
    )



}

export default VideoPage;