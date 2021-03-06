import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {


    return (
        <div >
            <Box sx={{ flexGrow: 1, pt: 2, mb: 2, borderTop: "2px solid black" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid sx={{ ml: 5 }} item xs={12} sm={8} md={6} >
                        <div style={{ marginTop: 25 }}>
                            <span style={{ fontWeight: 500, color: "tomato", paddingBottom: "15px" }}>CONTACT US</span><br />  <br /> <FontAwesomeIcon icon={faPhone} /> +8801********* <br /> <FontAwesomeIcon icon={faVoicemail} /> smartlearn50@gmail.com
                            <br />  <i className="fab fa-instagram-square" style={{ color: "red" }}></i> - <i style={{ color: "blue" }} className="fab fa-facebook"></i> - <i style={{ color: "#3498DB " }} class="fab fa-twitter-square"></i> - <i style={{ color: "#C0392B  " }} class="fab fa-youtube"></i>

                        </div>

                    </Grid>
                    <Grid item xs={12} sm={4} md={4} >
                        <div style={{ display: "grid", gridTemplateColumns: "3fr 3fr" }}>
                            <div>
                                <TextField id="outlined-basic" label="Name" variant="standard" />
                                <TextField id="filled-basic" label="Email" variant="standard" />
                                <TextField id="standard-basic" label="Phone" variant="standard" />

                            </div>
                            <Button sx={{ marginLeft: 2, marginBottom: 2, mt: 10, borderRadius: 20 }} variant="contained" color="error" size="small">Submit <i className="fas fa-check-circle"></i></Button>


                        </div>

                    </Grid>

                </Grid>
            </Box>


        </div>
    );
};

export default Footer;