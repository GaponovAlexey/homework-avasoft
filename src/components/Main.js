import React from 'react'
import { css } from '@emotion/css'
import { Select } from 'antd'
import { Avatar, Badge } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Option } = Select

export const Main = () => {
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
              <Select
                defaultValue='USD'
                style={{ width: 90, paddingLeft: 20, top: -5 }}
              >
                <Option value='USD'>USD</Option>
                <Option value='EUR'>EUR</Option>
              </Select>
            </div>
          </div>
          <div>
            <div>
              <div className='header__vector-ico'>
                <Badge dot style={{ top: -5, right: 5 }}>
                  <Avatar
                    shape='large'
                    size={40}
                    style={{ top: -10, backgroundColor: 'white', color: '#605E5E' }}
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
