import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';

const Free = () => {
    const [fservice, setfService] = useState([]);
    useEffect(() => {
        fetch('./values.JSON')
            .then(res => res.json())
            .then(data => setfService(data))
    }, [])

    const result = fservice.filter(word => word.price === 0);


    return (
        <div>
            <Typography sx={{ textAlign: "center", pt: 3, fontWeight: 800 }} variant="h4">Limited Time Offer</Typography>

            <Box sx={{ flexGrow: 1, m: 5 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        result.map(sub => <Grid item xs={12} sm={4} md={4} >
                            <Course course={sub} ></Course>
                        </Grid>)

                    }
                </Grid>
            </Box>

        </div>
    );
};

export default Free;