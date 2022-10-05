import React, {Component} from 'react';
import Nav from '../../compoments/Nav/index'
import {DefaultButton} from "@fluentui/react";
class IndexPage extends Component {
    render() {
        const leftStyle={
            //float:"left",
            width:'20%'
        }
        const rightStyle = {
            //float: 'right',
        }

        return (
            <div>
                <div style={leftStyle}>
                    <Nav></Nav>
                </div>
                <div style={rightStyle}>
                    <DefaultButton text="Standard"  />
                </div>
                <div style={{clear:'both'}}></div>
            </div>
        );
    }
}

export default IndexPage;