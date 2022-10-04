import React, {Component} from 'react';
import {Alert, Button, Collapse, Container, Link, Paper, Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import "./index.css"
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
function ActivePage()   {
    const [open, setOpen] = React.useState(true);
    let shouldShow = false;
    function show() {
        this.setState({
            shouldShow: true
        })
    }

        return (
            <div>
                <Container>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    marginTop:"8%",
                }}
                     className={'describe'}
                >
                    <Paper elevation={3} style={{
                        width:'50%'
                    }}>
                        <p>VIP可以让您有更好的使用体验，您可以：
                            <li>下载本站视频</li>
                            <li>使用本站的pixiv代理服务</li>
                            <li>每日签到获得双倍积分</li>
                            <li>加入性教集团的Github Organization</li>
                        </p>
                        <Link href="#">点击购买VIP</Link>
                    </Paper>
                </Box>
                    <Paper sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center',
                        marginTop:"8%",
                        width:'50%'
                    }}>
                        <TextField id="outlined-basic" label="输入您的激活码" variant="outlined" onKeyUp={(e) => {
                            if (e.keyCode === 13) {
                                shouldShow = true
                                setOpen(true);
                            }
                        }}/>
                        <Button variant="outlined" onClick={()=> {
                            setOpen(true);
                        }}
                                sx={{
                                    marginLeft: '15px',
                                }}
                        >验证</Button>
                    </Paper>
                </Container>
                <Collapse in={open}
                >

                </Collapse>
            </div>
        );
}

export default ActivePage;