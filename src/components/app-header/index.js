import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style'
function AppHeader() {
  return (
    <HeaderWrapper>
      {/* <NavLink to="/discover">发现</NavLink>
      <NavLink to="/friends">朋友</NavLink>
      <NavLink to="/mine">我的</NavLink> */}
      <div className="content wrap-v1"></div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
