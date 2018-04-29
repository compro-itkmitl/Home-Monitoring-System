import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import '../fire';
import createContainer from 'firestore-react';

let data = {
  labels: [],
  datasets: []
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
          suggestedMin: 26,
          suggestedMax: 34
        }
      }
    ]
  }
};

class TempGraph extends Component {
  getTemp() {
    const list = [];
    const list2 = [];
    let i = 0;
    let mintimestamp = Math.floor(Date.now() / 1000) - 3600;
    this.props.temp.snapshot.forEach((doc) => {
      i++;
      if (doc.id >= mintimestamp) {
        list.push(doc.data().temp);
        var d = new Date(i);
        d.setUTCSeconds(doc.id);
        list2.push(d.toLocaleTimeString('th-TH'));
      }
    });
    data.labels = list2;
    data.datasets = [
      {
        label: 'Temperature',
        data: list,
        borderColor: '#009688',
        fill: false
      }
    ];
  }

  render() {
    return (
      <div>
        {this.props.temp.loading ? 'LOADING' : this.getTemp()} <Line data={data} options={options} />
      </div>
    );
  }
}

export default createContainer(TempGraph, (db) => {
  return {
    temp: db
      .collection('devices')
      .doc('717a4e49-be9c-4088-9b06-c3d0ac06ba90')
      .collection('temp')
  };
});
