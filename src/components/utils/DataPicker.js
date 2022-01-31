import React from 'react'
import { DatePicker, Space } from 'antd'
import { css } from '@emotion/css'

const { RangePicker } = DatePicker

export const DataPicker = () => {
  return (
    <div
      className={css`
        margin-bottom: 16px;
        border-radius: 22px;
      `}
    >
      <Space direction='vertical' size={1}>
        <RangePicker />
      </Space>
    </div>
  )
}
