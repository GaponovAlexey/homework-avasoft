import { css } from '@emotion/css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Dashbaord } from '../page/Dashbaord'
import { Statistics } from '../page/Statistics'

export const Menu = () => {
  const [isPosition, setISPOSITION] = useState(false)
  const dataStatic = useSelector((state) => state.red.StaticCardData)

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
          min-width: 13rem;
          padding-top: 2rem;
          padding-bottom: 50rem;
          position: absolute;
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
      {!isPosition ? (
        <Dashbaord dataStatic={dataStatic} />
      ) : (
        <Statistics dataStatic={dataStatic} />
      )}
    </div>
  )
}
