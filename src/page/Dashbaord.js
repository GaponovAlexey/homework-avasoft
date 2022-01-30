import { css } from '@emotion/css'
import React from 'react'
import { BarChart } from '../components/grafic/BarChart'
import { LinearChart } from '../components/grafic/LinearChart'
import { DataPicker } from '../components/utils/DataPicker'
import { Static } from '../components/utils/Static'

export const Dashbaord = () => {
  const dataStatic = [
    { id: '1', title: 'Water' },
    { id: '2', title: 'Fire' },
    { id: '3', title: 'Wind' },
    { id: '4', title: 'Forest' },
  ]
console.log('rap');
  return (
    <div>
      <div
        className={css`
          padding-left: 14.5rem;
        `}
      >
        <div>
          <h2
            className={css`
              padding-top: 2.5rem;
              padding-bottom: 1.1rem;
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
              margin-bottom: 20px;
              margin-right: 20px;
            `}
          >
            {dataStatic.map((el) => (
              <Static key={el.id} {...el} />
            ))}
          </span>
          <span>
            <BarChart />
          </span>
        </div>
        <div>
          <LinearChart />
        </div>
      </div>
    </div>
  )
}
