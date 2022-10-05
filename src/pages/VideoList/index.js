import React, {Component} from 'react';
import VideoCard from "../../compoments/VideoCard";
import classes from './index.module.css'
import axios from "axios";
class VideoList extends Component {
    state = {
        data : []
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8080/videos?size=24').then(res => {
            console.log('sent request')
            this.setState({
                data:res.data._embedded.videos
            })
        })
    }

    render() {
        return (
            <div className={classes.d}>
                    {
                        this.state.data.map(data => {
                            return <VideoCard title={data.title} preview={data.preview}></VideoCard>
                        })
                    }
            </div>
        );
    }
}

export default VideoList;