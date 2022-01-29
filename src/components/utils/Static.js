import { css } from '@emotion/css'
import React from 'react'

export const Static = () => {
  return (
    <div>
      <div
        className={css`
          border: solid 2px;
          width: 241px;
          height: 142px;
          border-radius: 5px;
          position: absolute;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <div
            className={css`
              position: relative;
              padding-top: 21px;
              padding-left: 24px;
            `}
          >
            water
          </div>
          <div className='static-card-ico'></div>
        </div>
        <div>
          <div
            className={css`
              font-weight: 500;
              font-size: 30px;
              line-height: 38px;
            `}
          >
            20567
          </div>
        </div>
      </div>
    </div>
  )
}
