import React, {Component} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, IconButton, useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";

class Index extends Component {
    render() {
        return (
            <Card sx={{
                maxWidth: 345,
                marginTop:'20px',
                marginRight:'15px'
            }
            }>
                <CardMedia
                    component="img"
                    height="140"
                    image={this.props.link}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" noWrap={true}>
                        {this.props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}

export default Index;