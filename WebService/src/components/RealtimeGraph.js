import React, { Component } from 'react';
import RTChart from 'react-rt-chart';

var getRandomValue = require('get-random-values');

class RealtimeGraph extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setInterval(() => this.forceUpdate(), 1000);
    }
    
    render() {
        var data = {
          date: new Date(),
          Temp: getRandomValue(),
          Humid: getRandomValue()
        };
    
        return <RTChart
                fields={['Temp','Humid']}
                data={data} />
    }
}

export { RealtimeGraph };