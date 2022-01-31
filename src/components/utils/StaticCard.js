import { css } from '@emotion/css'
import React from 'react'
import { useSelector } from 'react-redux'

const icotop = <span>&#9650;</span>
const icodown = <span>&#9660;</span>

export const StaticCard = ({ title, value, PrevValue }) => {
  const { StaticCardData } = useSelector((state) => state.red)

  const raz = value - PrevValue
  const endValue = (raz / PrevValue) * 100

  return (
    <div
      className={css`
        border: 0.5px solid #e1e1e1;
        width: 16.06rem;
        height: 8.875rem;
        border-radius: 8px;
        background-color: #fff;
        &:hover {
          box-shadow: 2px 5px 16px 0px #ececff;
          cursor: pointer;
        }
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
            padding-left: 27px;
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
          position: relative;
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
          {value}
          <span
            className={css`
              position: relative;
              bottom: 5px;
              font-size: 50%;
              margin-left: 15px;
              ${endValue > 0 ? 'color: green;' : 'color: red;'}
            `}
          >
            {endValue > 0 ? icotop : icodown}
            <span
              className={css`
                margin-left: 5px;
              `}
            >
              {endValue.toFixed(1)}%
            </span>
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
            margin-left: 33px;
            color: #8c8c8c;
          `}
        >
          {PrevValue}
        </div>
      </div>
    </div>
  )
}
