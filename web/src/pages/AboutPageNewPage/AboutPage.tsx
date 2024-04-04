import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AboutPageNewPage = () => {
  return (
    <>
      <Metadata title="AboutPageNew" description="AboutPageNew page" />

      <h1>AboutPageNewPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AboutPageNewPage/AboutPageNewPage.tsx</code>
      </p>
      <p>
        My default route is named <code>aboutPageNew</code>, link to me with `
        <Link to={routes.aboutPageNew()}>AboutPageNew</Link>`
      </p>
    </>
  )
}

export default AboutPageNewPage
