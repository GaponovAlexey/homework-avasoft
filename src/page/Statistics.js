import { css } from '@emotion/css'
import React from 'react'
import { TableChart } from '../components/grafic/TableChart'
import { DataPicker } from '../components/utils/DataPicker'
import { StaticCard } from '../components/utils/StaticCard'

export const Statistics = ({ dataStatic }) => {
  const water = dataStatic.find((el) => el.title === 'Water')
  console.log('static');
  return (
    <div>
      <div
        className={css`
          // background-color: #f9f9ff;
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
        <div
          className={css`
            margin-bottom: 20px;
          `}
        >
          <StaticCard {...water} />
        </div>
        <div>
          <TableChart />
        </div>
      </div>
    </div>
  )
}
