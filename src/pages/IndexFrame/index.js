import React, {Component} from 'react';
import Nav from "../../compoments/Nav";
import {Outlet} from "react-router-dom";

class IndexFrame extends Component {
    render() {
        const leftStyle={
            float:"left",
            width:'20%'
        }
        const rightStyle = {
            float: 'right'
        }

        return (
            <div>
                <div style={leftStyle}>
                    <Nav></Nav>
                </div>
                <div style={rightStyle}>
                    <Outlet></Outlet>
                </div>
            </div>
        );
    }
}

export default IndexFrame;