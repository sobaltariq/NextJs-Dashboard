"use client";
import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto"; // Import all Chart.js elements

const MyChart = ({ labels, systolicData, diastolicData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const bloodPressureChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Systolic",
            data: systolicData,
            borderColor: "red",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            pointRadius: 8,
            pointHoverRadius: 10,
            lineTension: 0.4,
          },
          {
            label: "Diastolic",
            data: diastolicData,
            borderColor: "blue",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            pointRadius: 8,
            pointHoverRadius: 10,
            lineTension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        layout: {
          padding: 0,
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            min: 60,
            max: 180,
            ticks: {
              stepSize: 20,
            },
          },
        },
      },
    });

    return () => bloodPressureChart.destroy(); // Cleanup chart on unmount
  }, [labels, systolicData, diastolicData]);

  return <canvas ref={canvasRef} />;
};

export default MyChart;
