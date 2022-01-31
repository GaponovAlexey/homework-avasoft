import React from 'react'
import { Select } from 'antd'
import { useDispatch } from 'react-redux'
import { ChangeMoney } from '../../Redux/reducer'

const { Option } = Select

export const MoneyBar = () => {
  const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch(ChangeMoney())}>
      <Select
        defaultValue='USD'
        style={{ width: 90, paddingLeft: 20, top: -5 }}
      >
        <Option value='USD'>
          <span onClick={() => dispatch(ChangeMoney())}>USD</span>
        </Option>
        <Option value='EUR'>
          <span onClick={() => dispatch(ChangeMoney())}>EUR</span>
        </Option>
      </Select>
    </div>
  )
}
