import { matchPath } from '@redwoodjs/router'
import { MiddlewareResponse } from '@redwoodjs/vite/middleware'

import App from './App'
import { Document } from './Document'
import OgImageMiddleware from './lib/OgImageMiddleware'

import './ogStuff'

interface Props {
  css: string[]
  meta?: any[]
}

const getRoutesList = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { getProjectRoutes } = await import('@redwoodjs/internal/dist/routes')
    return getProjectRoutes()
  } else {
    // @TODO what do we do in production?
  }
}

export const registerMiddleware = async () => {
  console.log('Register middleware called', await getRoutesList())

  return [
    // [
    //   ogMw,
    //   '*',
    // ],
  ]
}

export const ServerEntry: React.FC<Props> = ({ css, meta }) => {
  return (
    <Document css={css} meta={meta}>
      <App />
    </Document>
  )
}
