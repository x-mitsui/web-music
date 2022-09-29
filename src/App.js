import { memo } from 'react'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { routes } from '@/router/routes.js'

function App() {
  return (
    <div className="app">
      <HashRouter>
        <AppHeader />
        <div className="content">{renderRoutes(routes)}</div>
        <AppFooter />
      </HashRouter>
    </div>
  )
}

export default memo(App)
