import React, {Component} from 'react';
import VideoCard from "../../components/VideoCard";
import './index.css';
class VideoList extends Component {
    render() {
        return (
            <div id={'list-container'}>
                <VideoCard className={'video-card'} />
                <VideoCard className={'video-card'} />
                <VideoCard className={'video-card'} />
                <VideoCard className={'video-card'} />
                <VideoCard className={'video-card'} />
                <VideoCard className={'video-card'} />
                <VideoCard className={'video-card'} />
                <VideoCard className={'video-card'} />
            </div>
        );
    }
}

export default VideoList;