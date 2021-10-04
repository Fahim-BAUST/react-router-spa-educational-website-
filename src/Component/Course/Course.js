import { Button, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import React from 'react';

const Course = (props) => {
    const { name, price, codeImg, rating, description } = props.course;
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={codeImg}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Course Name: {name}
                    </Typography>
                    <Typography sx={{ fontWeight: 500 }} variant="h7" component="div">
                        Price: {price}$
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Rating name="read-only" value={rating} readOnly />
                </CardContent>

                <Button sx={{ marginLeft: 2, marginBottom: 2 }} variant="contained" color="success" size="small">Enroll Now</Button>

            </Card>
        </div>
    );
};

export default Course;