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
        }
      }
    ]
  }
};

class HumidGraph extends Component {
  getHumid() {
    const list = [];
    const list2 = [];
    let i = 0;
    let mintimestamp = Math.floor(Date.now() / 1000) - 3600;
    this.props.humid.snapshot.forEach((doc) => {
      i++;
      if (doc.id >= mintimestamp) {
        list.push(doc.data().humidity);
        var d = new Date(i);
        d.setUTCSeconds(doc.id);
        list2.push(d.toLocaleTimeString('th-TH'));
      }
    });
    data.labels = list2;
    data.datasets = [
      {
        label: 'Humidity',
        data: list,
        borderColor: '#00BCD4',
        fill: false
      }
    ];
  }

  render() {
    return (
      <div>
        {this.props.humid.loading ? 'LOADING' : this.getHumid()} <Line data={data} options={options} />
      </div>
    );
  }
}

export default createContainer(HumidGraph, (db) => {
  return {
    humid: db
      .collection('devices')
      .doc('717a4e49-be9c-4088-9b06-c3d0ac06ba90')
      .collection('temp')
  };
});
