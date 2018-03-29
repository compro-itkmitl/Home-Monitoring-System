import React, { Component } from 'react';
import axios from '../../axios-graph';
import {Line} from 'react-chartjs-2';

//ASSUME THAT DATA WAS FIXED
let data = {
    labels: [
        "08:00AM", "08:30AM", "09:00AM", "09:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM" 
    ],
    datasets: [
        {
            label: "Humidity",
            data: [
                59, 60, 62, 68, 62, 70, 65, 66
            ],
            borderColor: "#00BCD4",
            fill: false
        },
    ]
}

const options = {
    responsive: true,
    title: {
        display: false
    },
    hover: {
        mode: "dataset"
    },
    scales: {
        yAxes: [
            {
              display: true,
              scaleLabel: {
                show: true,
                labelString: 'Value'
              },
              ticks: {
                suggestedMin: 40,
                suggestedMax: 80
              }
            }
        ]
    }
}

class HumidGraph extends Component {
    
    //TODO: MAKE DATA UPDATE FROM DATABASE
    componentDidMount () {
        axios.get('https://compro-home-monitoring.firebaseio.com/test-temp.json')
        .then((response) => {
            //DO IT HERE
            console.log(response);
        })
        .catch((response) => {
            console.log(response.data.errors)
        });
    }

    render() {
        return (
            <Line
                data={data}
                options={options} />
        )
    }
}

export default HumidGraph;