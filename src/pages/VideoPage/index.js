import React, {Component} from 'react';
import VideoCard from "../../compoments/VideoCard";
import classes from './index.css'
class VideoPage extends Component {
    render() {

        return (
            <div className={classes.d}>
                <VideoCard ></VideoCard>
                <VideoCard ></VideoCard>
                <VideoCard ></VideoCard>
                <VideoCard ></VideoCard>
                <VideoCard ></VideoCard>
            </div>
        );
    }
}

export default VideoPage;