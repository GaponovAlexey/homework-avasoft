import { UserOutlined } from '@ant-design/icons'
import { css } from '@emotion/css'
import { Avatar, Badge } from 'antd'
import React from 'react'
import { MoneyBar } from './utils/MoneyBar'


export const Header = () => {
  return (
    <div
      className={css`
        display: flex;
      `}
    >
      <div className='header__logo-img'></div>
      <div
        className={css`
          width: 100%;
          height: 60px;
          background-color: #efefff;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            margin: 19px 24px;
            position: relative;
          `}
        >
          <div
            className={css`
              display: flex;
            `}
          >
            <div>Currency</div>
            <div>
              <MoneyBar />
            </div>
          </div>
          <div>
            <div>
              <div className='header__vector-ico'>
                <Badge dot style={{ top: -5, right: 5 }}>
                  <Avatar
                    shape='large'
                    size={40}
                    style={{
                      top: -10,
                      backgroundColor: 'white',
                      color: '#605E5E',
                    }}
                    icon={<UserOutlined />}
                  />
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
