
import React from 'react'
import css from '../base.css'
import ga from '../ga'
import Background from './Background.jsx'
import Header from './Header.jsx'
import BaseColor from './BaseColor.jsx'
//import Gradient from './Gradient.jsx'

class Root extends React.Component {

  render () {
    let initialProps = {
      __html: safeStringify(this.props)
    }
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
          <meta name='author' content='Brent Jackson' />
          <meta name='description' content={this.props.description} />
          <meta name='keywords' content={this.props.keywords.join(', ')} />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <div>App</div>
          <script
            id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initialProps} />
          <script src='bundle.js' />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
        </body>
      </html>
    )
  }

}

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

export default Root

