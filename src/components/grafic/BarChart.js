import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { css } from '@emotion/css'
import { useSelector } from 'react-redux'

export const BarChart = () => {
  const barData  = useSelector((state) => state.red.barData)
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
        data: [barData.rus],
      },
      {
        name: 'Spain',
        color: '#6900EE',
        data: [barData.spain],
      },
      {
        name: 'USA',
        color: '#EE0056',
        data: [barData.usa],
      },
      {
        name: 'Italy',
        color: '#EE9D00',
        data: [barData.itali],
      },
    ],
  }

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
