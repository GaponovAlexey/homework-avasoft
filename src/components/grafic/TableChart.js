import { css } from '@emotion/css'
import { Table } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import { useSelector } from 'react-redux'

const icotop = <span>&#9650;</span>
const icodown = <span>&#9660;</span>

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 250,
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
    width: 250,
  },
  {
    title: 'Prev value',
    dataIndex: 'PrevValue',
    key: 'PrevValue',
    width: 250,
  },
  {
    title: '%',
    key: 'value',
    render: (payload) => {
      const raz = payload.value - payload.PrevValue
      const endValue = ((raz / payload.PrevValue) * 100).toFixed(1)
      return (
        <div
          className={css`
            color: ${endValue > 0 ? 'green' : 'red'};
          `}
        >
          {endValue >= 0 ? endValue : endValue}%
        </div>
      )
    },
    width: 150,
  },
]

export const TableChart = () => {
  const { tableChartData, Money } = useSelector((state) => state.red)
  console.log(Money)
  return (
    <table>
      <Table
        columns={columns}
        dataSource={tableChartData}
        pagination={{ pageSize: 5 }}
      />
    </table>
  )
}
