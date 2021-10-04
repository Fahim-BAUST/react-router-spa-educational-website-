import { Button, Typography } from '@mui/material';
import React from 'react';

const Notfound = () => {
    return (
        <div style={{ textAlign: "center", backgroundColor: "#E8F6F3 " }}>
            <Typography sx={{ fontSize: 150, fontWeight: 800 }} variant="h1">404</Typography>
            <Typography variant="h4">OPPS! PAGE NOT FOUND</Typography>
            <Typography variant="body2" sx={{ fontWeight: 500, pt: 3, pb: 3 }}>Sorry The Page You Looking For Does not Exist,If YOu Think Something Is Broken Report A Problem</Typography>
            <Button sx={{ marginLeft: 2, marginBottom: 2 }} variant="outlined" color="error">REPORT</Button>
        </div>
    );
};

export default Notfound;