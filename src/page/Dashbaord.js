import { css } from '@emotion/css'
import React from 'react'
import { DataPicker } from '../components/utils/DataPicker'
import { Static } from '../components/utils/Static'

export const Dashbaord = () => {
  const dataStatic = [
    { id: '1', title: 'Water' },
    { id: '2', title: 'Fire' },
    { id: '3', title: 'Wind' },
    { id: '4', title: 'Forest' },
  ]

  return (
    <div>
      <div
        className={css`
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
        <div
          className={css`
            display: flex;
          `}
        >
          <span
            className={css`
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-column-gap: 20px;
              grid-row-gap: 20px;
            `}
          >
            {dataStatic.map((el) => (
              <Static key={el.id} {...el} />
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}
