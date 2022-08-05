import React, {Component} from 'react';
import {Alert, Button, Collapse, Container, Link, Paper, Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import "./index.css"
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
function ActivePage()   {
    const [open, setOpen] = React.useState(true);
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
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{
                            mb: 2,
                            position: 'fixed',
                            bottom: '0',
                            right: '0',
                    }}
                    >
                        激活成功，感谢支持！
                    </Alert>
                </Collapse>
            </div>
        );
}

export default ActivePage;