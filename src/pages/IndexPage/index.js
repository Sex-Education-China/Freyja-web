import React, {Component} from 'react';
import { useSpring, animated  } from 'react-spring'
import {Parallax, ParallaxLayer} from "@react-spring/parallax";

function Index()  {
        const props = useSpring({
                to: { opacity: 1 },
                from: { opacity: 0 },
                config: { duration: 3000 },
        });
        return (
            <div style={{
                backgroundColor:'#f4f6f9',
                height:'100vh',
                width:'100vw',
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-around',
                alignItems:'center',
            }}
            >
                <animated.h1 style={props}>hello</animated.h1 >
            </div>
        );
    }

export default Index;