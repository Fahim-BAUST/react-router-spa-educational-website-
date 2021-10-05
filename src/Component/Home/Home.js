import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Animated from '../Animated/Animated';
import Charts from '../Charts/Charts';

const Home = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./values.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div>
            <div style={{ textAlign: "center", margin: "10px" }}>
                <Animated ></Animated>

            </div>
            <Charts style={{ textAlign: "center" }}></Charts>

            {/* cant use map because : because I applied  different  styles here */}
            <Box sx={{ flexGrow: 1, my: 6 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={12} sm={12} md={12}>
                        <div style={{ backgroundColor: "cyan", paddingBottom: 20 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                    <Grid item xs={12} sm={4} md={6} sx={{ textAlign: "center" }} >
                                        <Typography sx={{ pt: 6, mb: 1 }} variant="h2">{courses[0]?.name} <i className="fab fa-html5"></i></Typography>
                                        <Typography sx={{ pt: 1, mb: 2 }} variant="h5">{courses[0]?.shortDescription}</Typography>
                                        <Button sx={{ borderRadius: 20 }} variant="contained" color="error">Learn More</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={6} sx={{ textAlign: "center" }} >
                                        <div style={{ backgroundColor: "white" }}>
                                            <Typography variant="h4">{courses[0]?.name} Example:</Typography>
                                            <img src={courses[0]?.codeImg} alt="" />

                                        </div>

                                    </Grid>

                                </Grid>
                            </Box>

                        </div>


                    </Grid>

                    <Grid item xs={12} sm={12} md={12} sx={{ mt: 1 }}>
                        <div style={{ backgroundColor: "#34495E", paddingBottom: 20 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                    <Grid item xs={12} sm={4} md={6} sx={{ textAlign: "center" }} >
                                        <Typography sx={{ pt: 6, mb: 1, color: "white" }} variant="h2">{courses[1]?.name} <i className="fab fa-css3-alt"></i></Typography>
                                        <Typography sx={{ pt: 1, mb: 2, color: "white" }} variant="h5">{courses[1]?.shortDescription}</Typography>
                                        <Button sx={{ borderRadius: 20 }} variant="contained" color="error">Learn More</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={6} sx={{ textAlign: "center" }} >
                                        <div style={{ backgroundColor: "white" }}>
                                            <Typography variant="h4">{courses[1]?.name} Example:</Typography>
                                            <img src={courses[1]?.codeImg} alt="" />

                                        </div>

                                    </Grid>

                                </Grid>
                            </Box>

                        </div>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{ mt: 1 }}>
                        <div style={{ backgroundColor: "#F9E79F", paddingBottom: 20 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                    <Grid item xs={12} sm={4} md={6} sx={{ textAlign: "center" }} >
                                        <Typography sx={{ pt: 6, mb: 1 }} variant="h2">{courses[2]?.name} <i className="fab fa-js-square"></i></Typography>
                                        <Typography sx={{ pt: 1, mb: 2 }} variant="h5">{courses[2]?.shortDescription}</Typography>
                                        <Button sx={{ borderRadius: 20 }} variant="contained" color="error">Learn More</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={6} sx={{ textAlign: "center" }} >
                                        <div style={{ backgroundColor: "white" }}>
                                            <Typography variant="h4">{courses[2]?.name} Example:</Typography>
                                            <img src={courses[1]?.codeImg} alt="" />

                                        </div>

                                    </Grid>

                                </Grid>
                            </Box>

                        </div>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{ mt: 1 }}>
                        <div style={{ backgroundColor: "#34495E", paddingBottom: 20 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                    <Grid item xs={12} sm={4} md={6} sx={{ textAlign: "center" }} >
                                        <Typography sx={{ pt: 6, mb: 1, color: "white" }} variant="h2">{courses[3]?.name} <i className="fab fa-python"></i></Typography>
                                        <Typography sx={{ pt: 1, mb: 2, color: "white" }} variant="h5">{courses[3]?.shortDescription}</Typography>
                                        <Button sx={{ borderRadius: 20 }} variant="contained" color="error">Learn More</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={6} sx={{ textAlign: "center" }} >
                                        <div style={{ backgroundColor: "white" }}>
                                            <Typography variant="h4">{courses[3]?.name} Example:</Typography>
                                            <img src={courses[1]?.codeImg} alt="" />

                                        </div>

                                    </Grid>

                                </Grid>
                            </Box>

                        </div>

                    </Grid>

                </Grid>
            </Box>

        </div>
    );
};

export default Home;