import React from 'react'
import { Select } from 'antd'
import { useDispatch } from 'react-redux'
import { ChangeMoney } from '../../Redux/reducer'

const { Option } = Select

export const MoneyBar = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <Select
        defaultValue='USD'
        style={{ width: 89, paddingLeft: 20, top: -5 }}
      >
        <Option value='USD'>
          <span onClick={() => dispatch(ChangeMoney(false))}>USD</span>
        </Option>
        <Option value='EUR'>
          <span onClick={() => dispatch(ChangeMoney(true))}>EUR</span>
        </Option>
      </Select>
    </div>
  )
}
