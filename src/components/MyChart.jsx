"use client";
import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";

const MyChart = ({
  labels,
  systolicData,
  diastolicData,
  setSelectedEntry,
  userData,
}) => {
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
        onClick: (event, elements, chart) => {
          if (elements[0]) {
            const i = elements[0].index;
            const selectedData = userData.diagnosis_history[i];
            setSelectedEntry(selectedData);

            // alert(
            //   chart.data.labels[i]
            //   // chart.data.labels[i].split(" ")[2]
            // );
          }
        },
      },
    });

    return () => bloodPressureChart.destroy(); // Cleanup chart on unmount
  }, [labels, systolicData, diastolicData, setSelectedEntry]);

  return <canvas ref={canvasRef} />;
};

export default MyChart;
