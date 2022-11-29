import axios from "axios";
import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";

const ApiPaichart = () => {
    const [chartData, setChartData] = useState({});
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "right"
            },
            title: {
                display: true,
                text: "Chart.js Line Chart With Api Data"
            }
        }
    }
    const Chart = () => {
        let xValues = [];
        let confirmed = [];
        let deaths = [];
     

        axios
            .get("https://covid2019-api.herokuapp.com/v2/current")
            .then((res) => {
                for (const dataObj of res.data.data.slice(0, 15)) {
                    xValues.push(dataObj.location);
                    confirmed.push(dataObj.confirmed);
                    deaths.push(dataObj.deaths);
                }

                setChartData({
                    labels: xValues,
                    datasets: [
                        {
                            label: "confirmed COVID cases",
                            data: confirmed,
                            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                            borderColor: ["rgba(255, 99, 132, 1)"],
                            borderWidth: 1
                        },
                        {
                            label: "deaths",
                            data: deaths,
                            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                            borderColor: ["rgba(54, 162, 235, 0.2)"],
                            borderWidth: 1
                        }
                    ]
                });
            })

            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        Chart();
    }, []);

    return (
            <div>
            {(chartData?.labels?.length > 0) ? <Line data={chartData} options={options} />: []}
            </div>
    );
};
export default ApiPaichart;
