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

const arrVendasMensais = [
    { diaSemana: 'Segunda', valorVendido: 10.20, valorPrevisto: 80 },
    { diaSemana: 'Terça', valorVendido: 20.40, valorPrevisto: 90 },
    { diaSemana: 'Quarta', valorVendido: 30.50, valorPrevisto: 70 },
    { diaSemana: 'Quinta', valorVendido: 60.70, valorPrevisto: 65 },
    { diaSemana: 'Sexta', valorVendido: 80, valorPrevisto: 100 },
];

export default function ActionsChart() {
    const data = {
        datasets: [
            {
                label: 'Ação',
                data: arrVendasMensais,
                borderColor: '#4bc0c0',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                fill: true,
                parsing: {
                    xAxisKey: 'diaSemana',
                    yAxisKey: 'valorVendido',
                },
            },
            {
                label: 'Valor Previsto',
                data: arrVendasMensais,
                borderColor: '#ff6384',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.4,
                fill: false,
                parsing: {
                    xAxisKey: 'diaSemana',
                    yAxisKey: 'valorPrevisto',
                },
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
        <Line data={data} options={chartOptions} />
    );
}