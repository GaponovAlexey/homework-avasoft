import { css } from '@emotion/css'
import React from 'react'
import { DataPicker } from '../components/utils/DataPicker'
import { Static } from '../components/utils/Static'

export const Statistics = () => {
  return (
    <div>
      <div
        className={css`
          background-color: #f9f9ff;
          padding-left: 14.5rem;
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
            Statistics
          </h2>
        </div>
        <div>
          <DataPicker />
        </div>
        <div>
          <Static />
        </div>
        
      </div>
    </div>
  )
}
