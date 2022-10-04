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
        /*
        <ReactPlayer  url={'http://127.0.0.1:1987/proxy/' + state.videoLink} config={{
            file: {
                forceHLS: true,
            }
        }}/>

         */
        <ReactPlayer  url={"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"} config={{
            playing: true,
            file: {
                forceHLS: true,
            }
        }}
                      style={{
                          marginTop: '20px',
                          marginLeft: '20px',
                      }}
        />
    )



}

export default VideoPage;