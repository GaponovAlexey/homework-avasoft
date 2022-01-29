import { css } from '@emotion/css'
import React from 'react'

export const Menu = () => {
  return (
    <div
      className={css`
        width: 208px;
        min-height: 100%;
        
        margin-top: 30px;
        padding-bottom: 100%;
      `}
    >
      <div className='menu__dashboard-ico'>Dashbaord</div>
      <div className='menu__static-ico'>Statistics</div>
    </div>
  )
}
