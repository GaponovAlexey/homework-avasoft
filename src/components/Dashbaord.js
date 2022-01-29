import { css } from '@emotion/css'
import React from 'react'
import { Statics } from './Statistics'
import { DataPicker } from './utils/DataPicker'
import { Static } from './utils/Static'

export const Dashbaord = () => {
  return (
    <div
      className={css`
        background-color: #F9F9FF;
        padding-left: 24px;
      `}
    >
      <div>
        <h2
          className={css`
            padding-top: 40px;
            padding-bottom: 18px;
            font-weight: 600;
            font-size: 24px;
            line-height: 28px;
          `}
        >
          Good morning!
        </h2>
      </div>
      <div>
        <DataPicker />
      </div>
      <div>
        <Static />
      </div>
    </div>
  )
}
