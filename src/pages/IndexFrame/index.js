import React, {Component} from 'react';
import Nav from "../../compoments/Nav";
import {Outlet} from "react-router-dom";
import classes from "./index.module.css";
class IndexFrame extends Component {
    render() {
        const leftStyle={
            //float:"left",
            width:'20%',
        }
        const rightStyle = {
            //float: 'right'
        }

        return (
            <div className={classes.root}>
                <div style={leftStyle}>
                    <Nav></Nav>
                </div>
                <div style={rightStyle}>
                    <Outlet></Outlet>
                </div>
                <div style={{
                    clear:"both"
                }}></div>
            </div>
        );
    }
}

export default IndexFrame;