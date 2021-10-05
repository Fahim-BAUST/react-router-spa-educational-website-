
import { Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
const Charts = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./values.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    /* ------------
    Showing the popularity of some programming languages with react recharts 
    ------------ */
    const data = [
        {
            name: courses[0]?.name,
            A: 150 // A=popularity
        },
        {
            name: courses[1]?.name,
            A: 140
        },
        {
            name: courses[2]?.name,
            A: 150
        },
        {
            name: courses[3]?.name,
            A: 130
        },
        {
            name: courses[4]?.name,
            A: 110
        },
        {
            name: courses[5]?.name,
            A: 135

        },
        {
            name: courses[6]?.name,
            A: 160

        },
        {
            name: courses[7]?.name,
            A: 120

        }, {
            name: courses[8]?.name,
            A: 140

        },
        {
            name: courses[9]?.name,
            A: 130

        }
    ];

    return (


        <div >


            <RadarChart
                style={{ position: "absolute", fontWeight: "500" }}
                cx={210}
                cy={210}
                outerRadius={140}

                width={800}
                height={400}

                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis stroke="#00203FFF" dataKey="name" />
                <PolarRadiusAxis />
                <Radar
                    name="Mike"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}


                />

            </RadarChart>
            <Typography sx={{ fontWeight: "bold", marginLeft: 17, color: "#00203FFF" }} variant="h5">Popularity <i style={{ color: "#BC0101 " }} className="fas fa-fire"></i></Typography>

            <img style={{ width: 500, height: 350, float: "right", marginBottom: 20, borderRadius: 100 }} src="https://allhdwallpapers.com/wp-content/uploads/2015/07/Programming-4.jpg" alt="" />

        </div>



    );
};
export default Charts;