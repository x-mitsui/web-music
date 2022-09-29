import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { headerLinks } from '../../common/local-data'
import { HeaderWrapper } from './style'
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
                <div className="select-item">
                  {showSelectItem(item, index, () => (
                    <i className="sprite_01 icon"></i>
                  ))}
                </div>
              )
            })}
          </ul>
        </div>
        <div className="right"></div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
