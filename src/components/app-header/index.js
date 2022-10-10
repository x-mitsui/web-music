import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { headerLinks } from '../../common/local-data'
import { HeaderWrapper, HeaderRight } from './style'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function AppHeader() {
  const showSelectItem = (item, index, Icon) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <Icon />
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <div className="left">
          <a href="#/" className="logo sprite_01">
            {' '}
          </a>
          <ul className="select-links">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index, () => (
                    <i className="sprite_01 icon"></i>
                  ))}
                </div>
              )
            })}
          </ul>
        </div>
        <HeaderRight>
          <Input
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
            className="search"
          ></Input>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
