import OgImageMiddleware from '@redwoodjs/ogimage-gen/middleware'

import App from './App'
import { Document } from './Document'

interface Props {
  css: string[]
  meta?: any[]
}

// console.log('Register middleware called', await getRoutesList())
export const registerMiddleware = () => {
  const ogMw = new OgImageMiddleware({
    App,
    Document,
  })

  return [ogMw]
}

export const ServerEntry: React.FC<Props> = ({ css, meta }) => {
  return (
    <Document css={css} meta={meta}>
      <App />
    </Document>
  )
}
