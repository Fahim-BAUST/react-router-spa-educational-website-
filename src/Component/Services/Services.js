import { Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Services = () => {

    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Fahim-BAUST/json-files/main/values.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <Typography sx={{ textAlign: "center", pt: 3, fontWeight: 800 }} variant="h4">Start Learning</Typography>


            <Box sx={{ flexGrow: 1, m: 5 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* using spinner */}
                    {service.length === 0 ? <Box sx={{ width: '100%' }}><LinearProgress color="secondary" /></Box>
                        :
                        service.map(sub => <Grid item xs={12} sm={4} md={4} >
                            <Course course={sub} key={sub.id}></Course>
                        </Grid>)

                    }
                </Grid>
            </Box>

        </div>
    );
};

export default Services;