import React, { Component } from 'react';
import axios from '../../axios-graph';
import { Line } from 'react-chartjs-2';

//ASSUME THAT DATA WAS FIXED
let data = {
  labels: ['08:00AM', '08:30AM', '09:00AM', '09:30AM', '10:00AM', '10:30AM', '11:00AM', '11:30AM'],
  datasets: [
    {
      label: 'Temperature',
      data: [24, 25, 26, 27, 26, 25, 26, 25],
      borderColor: '#009688',
      fill: false
    }
  ]
};

const options = {
  responsive: true,
  title: {
    display: false
  },
  hover: {
    mode: 'dataset'
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
          suggestedMin: 20,
          suggestedMax: 30
        }
      }
    ]
  }
};

class TempGraph extends Component {
  //TODO: MAKE DATA UPDATE FROM DATABASE
  componentDidMount() {
    axios
      .get('https://compro-home-monitoring.firebaseio.com/test-temp.json')
      .then((response) => {
        //DO IT HERE
        console.log(response);
      })
      .catch((response) => {
        console.log(response.data.errors);
      });
  }

  render() {
    return <Line data={data} options={options} />;
  }
}

export default TempGraph;
