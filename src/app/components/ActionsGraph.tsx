'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Tooltip,
    Legend,
    Filler,
    CategoryScale,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler, Legend);


export default function ActionsGraph({ data }) {
    const chartData = {
        datasets: [
            {
                label: 'Ação',
                data,
                borderColor: '#4bc0c0',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                fill: true,
                parsing: {
                    xAxisKey: 'dayOfWeek',
                    yAxisKey: 'soldValue',
                },
            },
            {
                label: 'Valor Previsto',
                data,
                borderColor: '#ff6384',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.4,
                fill: false,
                parsing: {
                    xAxisKey: 'dayOfWeek',
                    yAxisKey: 'forecastValue',
                },
                Tooltip: true,
            },
        ],
    };

    const chartOptions = {
        scales: {
            x: {
                type: 'category',
                position: 'bottom',
            },
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <Line data={chartData} options={chartOptions} />
    );
}