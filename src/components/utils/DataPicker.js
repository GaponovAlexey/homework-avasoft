import React from 'react'
import { DatePicker, Space } from 'antd'

const { RangePicker } = DatePicker

export const DataPicker = () => {
  return (
    <div style={{ marginBottom: 16 }}>
      <Space direction='vertical' size={1}>
        <RangePicker />
      </Space>
    </div>
  )
}
