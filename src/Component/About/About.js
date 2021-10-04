import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const About = () => {
    return (
        <Box sx={{ flexGrow: 1, m: 5 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={12} sm={6} md={6} >
                    <Typography sx={{ marginTop: 10, fontWeight: 700 }} variant="h3">SMART LEARN</Typography>
                    <Typography variant="body2" sx={{ marginBottom: 5 }}>This is a web developer site on the internet. this is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy.</Typography>
                    <Button variant="contained" color="error" size="large" >Send us Mail</Button>
                </Grid>

                <Grid item xs={12} sm={6} md={6} >
                    <img style={{ width: "100%" }} src="https://cdn.pixabay.com/photo/2016/04/27/06/51/businessman-1356063_960_720.jpg" alt="" />
                </Grid>

            </Grid>
        </Box>
    );
};

export default About;