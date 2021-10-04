
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


    const data = [
        {
            name: courses[0]?.name,
            A: 120
        },
        {
            name: courses[1]?.name,
            A: 98
        },
        {
            name: courses[2]?.name,
            A: 86
        },
        {
            name: courses[3]?.name,
            A: 99
        },
        {
            name: courses[4]?.name,
            A: 85
        },
        {
            name: courses[5]?.name,
            A: 110

        },
        {
            name: courses[6]?.name,
            A: 120

        },
        {
            name: courses[7]?.name,
            A: 90

        }
    ];

    return (


        <div>


            <RadarChart
                cx={600}
                cy={200}
                outerRadius={140}

                width={800}
                height={400}

                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar
                    name="Mike"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                />
            </RadarChart>
            <Typography sx={{ textAlign: "center", fontWeight: "bold" }} variant="h5">Popularity</Typography>
        </div>



    );
};
export default Charts;