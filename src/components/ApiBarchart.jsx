import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
const ApiBarchart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: "Chart.js Bar Chart With Api Data"
            }
        }
    };
    const [abc, setAbc] = useState({});
    let labels = [];
    let values = [];
    async function getData() {
        await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then((response) => response.json())
            .then((data) => {
                let temp = {};
                console.log("data", data)
                data?.data.map((item) => {
                    labels.push(item.Year);
                    values.push(item.Population);
                })
                temp = {
                    labels: labels,
                    datasets: [
                        {
                            label: "Level of Temperature",
                            data: values,
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                                "rgba(255, 205, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(201, 203, 207, 0.2)"
                              ],
                              borderColor: [
                                "rgb(255, 99, 132)",
                                "rgb(255, 159, 64)",
                                "rgb(255, 205, 86)",
                                "rgb(75, 192, 192)",
                                "rgb(54, 162, 235)",
                                "rgb(153, 102, 255)",
                                "rgb(201, 203, 207)"
                              ],
                            borderWidth: '',
                        },
                    ],
                };
                setAbc(temp);

            })
    };

    useEffect(() => {
        getData();
    }, []);
console.log("abc",abc);
    return (
        <div>
            {(abc?.labels?.length > 0) ? <Bar data={abc} options={options} />: []}
            {!(abc?.labels?.length > 0) ? "" : <Bar data={abc} options={options} />}
        </div>
    )
}

export default ApiBarchart;
