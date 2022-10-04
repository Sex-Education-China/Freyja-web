import React, {Component} from 'react';
import VideoCard from "../../components.mui/VideoCard";
import './index.css';
import axios from "axios";
class VideoList extends Component {
    state = {
        data:[]
    }

     render() {
        console.log(this.state.data)
        return (
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'start',
                alignItems: 'center',
            }}>
                {
                    this.state.data.map((item,index) => {
                        return <VideoCard link={item.preview} title={item.title}/>
                    })
                }
            </div>
        );
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8080/videos').then(res => {
            console.log('sent request')
            this.setState({
                data:res.data._embedded.videos
            })
        })
    }
}

export default VideoList;