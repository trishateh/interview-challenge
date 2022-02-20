import React, { useEffect } from 'react'

import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Layout from '../components/Layout'

const MyApp = (props) => {
  const { Component, pageProps } = props
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext)

  //   return { ...appProps }
  // }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
