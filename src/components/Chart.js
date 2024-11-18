import React from "react";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';

import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export function ChartBar({ open, NOC, business, USD_COUNT, CAD, TOA, handelClose }) {

    const data1 = {
        labels: business,
        datasets: [
            {
                label: "Number of customer",
                data: NOC,
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
                label: "Total Open Amount",
                data: TOA,
                backgroundColor: "rgba(53, 162, 235, 0.5)"
            }
        ]
    };
    const data2 = {
        labels: ['USD', 'CAD'],
        datasets: [
            {
                label: '# of Votes',
                data: [USD_COUNT, CAD],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <Modal
            open={open}>
            <Grid
                sx={{
                    height: '60%',
                    width: '80%',
                    position: 'absolute',
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px"
                }}
                container >
                <Grid item xs={8} style={{ backgroundColor: "white" }}>
                    <Bar data={data1} />
                </Grid>

                <Grid item xs={4} style={{ backgroundColor: "white" }}>
                    <Pie data={data2} />
                </Grid>
                <Button variant="contained" onClick={handelClose}>
                    CANCEL
                </Button>
            </Grid>
        </Modal>
    );
}