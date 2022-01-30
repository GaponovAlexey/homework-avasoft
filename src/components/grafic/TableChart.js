import { css } from '@emotion/css'
import { Tag, Table } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'

const data = [
  {
    id: '1',
    name: 'Row1',
    value: 22000,
    PrevValue: 10000,
  },
  {
    id: '2',
    name: 'Row 2',
    value: 20567,
    PrevValue: 30555,
  },
  {
    id: '3',
    name: 'row 3',
    value: 20567,
    PrevValue: 10555,
  },
  {
    id: '3',
    name: 'row 3',
    value: 20567,
    PrevValue: 10555,
  },
  {
    id: '3',
    name: 'row 3',
    value: 20567,
    PrevValue: 10555,
  },
  {
    id: '3',
    name: 'row 3',
    value: 20567,
    PrevValue: 10555,
  },
  {
    id: '3',
    name: 'row 3',
    value: 22000,
    PrevValue: 10000,
  },
  {
    id: '3',
    name: 'row 3',
    value: 22000,
    PrevValue: 10000,
  },
  {
    id: '3',
    name: 'row 3',
    value: 22000,
    PrevValue: 10000,
  },
  {
    id: '3',
    name: 'row 3',
    value: 20567,
    PrevValue: 10555,
  },
  {
    id: '3',
    name: 'row 3',
    value: 20567,
    PrevValue: 10555,
  },
  {
    id: '3',
    name: 'row 3',
    value: 20567,
    PrevValue: 10555,
  },
  {
    id: '3',
    name: 'row 3',
    value: 20567,
    PrevValue: 10555,
  },
  {
    id: '3',
    name: 'row 3',
    value: 20567,
    PrevValue: 10555,
  },
]

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
      const endValue = (raz / payload.PrevValue) * 100
      return (
        <div className={css`color: ${endValue > 0 ? 'green' : 'red'}`}>{endValue.toFixed(1)}%</div>
      )
    },
    width: 150,
  },
]

export const TableChart = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  )
}
