import { css } from '@emotion/css'
import React from 'react'

export const Static = ({title}) => {
  const icotop = <span>&#9650;</span>
  const icodown = <span>&#9660;</span>
  return (
    <div>
      <div
        className={css`
          border: 0.5px solid #e1e1e1;
          width: 241px;
          height: 142px;
          border-radius: 8px;
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
              font-size: 14px;
              line-height: 22px;
            `}
          >
            {title}
          </div>
          <div className='static-card-ico'></div>
        </div>
        <div
          className={css`
            display: flex;
            flex-wrap: wrap;
            align-items: center;
          `}
        >
          <div
            className={css`
              font-weight: 500;
              font-size: 30px;
              line-height: 38px;
              padding-left: 24px;
              padding-top: 7px;
            `}
          >
            20567{' '}
            <span
              className={css`
                position: relative;
                bottom: 5px;
                font-size: 50%;
                color: green;
              `}
            >
              {icotop}70.5%
            </span>
          </div>
          <div
            className={css`
              border: 1px dashed #e1e1e1;
              width: 193px;
              margin: 0 auto;
              margin-bottom: 4px;
            `}
          />
          <div
            className={css`
              padding-left: 28px;
              color: #8c8c8c;
            `}
          >
            12434
          </div>
        </div>
      </div>
    </div>
  )
}
