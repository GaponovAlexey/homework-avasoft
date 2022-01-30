import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { css } from '@emotion/css'

const options = {
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  chart: {
    type: 'bar',
    // backgroundColor: "none",
    spacingLeft: 10,
    spacingRight: true,
    spacingBottom: 2,
    height: 304,
    width: 470,
    borderRadius: 10,
  },
  title: {
    text: 'BarChart',
  },
  series: [
    {
      name: 'Russia',
      color: '#2100EE',
      data: [99],
    },
    {
      name: 'Spain',
      color: '#6900EE',
      data: [75],
    },
    {
      name: 'USA',
      color: '#EE0056',
      data: [65],
    },
    {
      name: 'Italy',
      color: '#EE9D00',
      data: [60],
    },
  ],
}
export const BarChart = () => {
  return (
    <table
      className={css`
        border-radius: 10px;
      `}
    >
      <HighchartsReact
        className={css`
          border-radius: 10px;
        `}
        highcharts={Highcharts}
        options={options}
      />
    </table>
  )
}
