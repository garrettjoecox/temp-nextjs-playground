import React from 'react';
import { Layout } from '../components/layout';
import Page from '../components/page'
import { initializeStore } from '../store'

export default function SSR() {
  return (
    <Layout>
      <Page />
    </Layout>
  );
}

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export function getServerSideProps() {
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore

  dispatch({
    type: 'TICK',
    source: 'server',
    lastUpdate: Date.now(),
  })

  return { props: { initialReduxState: reduxStore.getState() } }
}
