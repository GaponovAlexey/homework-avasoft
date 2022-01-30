import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { useSelector } from 'react-redux'

export const LinearChart = () => {
  
  const {randomSeriesA, randomSeriesB, randomSeriesC} = useSelector((state) => state.red)
  const options = {
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },

    chart: {
      // backgroundColor: "none",
      width: 1024,
      height: 434,
      borderRadius: 10,
    },
    title: {
      text: 'LinearChart',
    },
    series: [
      {
        name: 'line A',
        color: 'red',
        data: randomSeriesA.map(el => el.data),
      },
      {
        name: 'line B',
        color: 'green',
        data: randomSeriesB.map(el => el.data),
      },
      {
        name: 'line C',
        color: 'blue',
        data: randomSeriesC.map(el => el.data),
      },
    ],
  }

  return (
    <table>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </table>
  )
}
