import React from 'react'
import ReactDOM from 'react-dom'

export async function autoA11yTest({ locale = 'ko', timeout = 1000 } = {}) {
  if (process.env.NODE_ENV.includes('development')) {
    try {
      const { default: axe } = await import('@axe-core/react')
      let lang = null
      if (locale !== 'en') {
        lang = await import(`axe-core/locales/${locale}.json`)
      }
      axe(React, ReactDOM, timeout, lang ? { locale: lang } : {})
    } catch (error) {
      console.error(error.message)
    }
  }
}