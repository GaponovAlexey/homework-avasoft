import { css } from '@emotion/css'
import React, { useState } from 'react'
import { Dashbaord } from '../page/Dashbaord'
import { Statistics } from '../page/Statistics'

export const Menu = () => {
  const [isPosition, setISPOSITION] = useState(false)

  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      <div
        className={css`
          background-color: #fff;
          width: 208px;
          min-height: 100%;
          padding-top: 30px;
          padding-bottom: 100%;
        `}
      >
        <div
          onClick={() => setISPOSITION(false)}
          className={
            !isPosition ? 'active menu__dashboard-ico' : 'menu__dashboard-ico'
          }
        >
          Dashbaord
        </div>
        <div
          onClick={() => setISPOSITION(true)}
          className={
            isPosition ? 'active menu__static-ico' : 'menu__static-ico'
          }
        >
          Statistics
        </div>
      </div>
      {!isPosition ? <Dashbaord /> : <Statistics />}
    </div>
  )
}
