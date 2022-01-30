import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
  // credits: {
  //   enabled: false,
  // },
  // exporting: {
  //   enabled: false,
  // },
  chart: {
    backgroundColor: "none",
  },
  title: {
    text: 'LinearChart',
  },
  series: [
    {
      name: 'line A',
      color: 'red',
      data: [20, 100, 30, 100, 30, 50, 10, 22, 33, 44, 55, 66],
    },
    {
      name: 'line B',
      color: 'green',
      data: [22, 120, 130, 30, 10, 50, 30, 100, 3, 100, 30, 50],
    },
    {
      name: 'line C',
      color: 'blue',
      data: [100, 20, 30, 100, 30, 50, 100, 20, 100, 30, 1, 33],
    },
  ],
}

export const LinearChart = () => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  )
}
