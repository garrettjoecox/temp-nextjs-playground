import { Provider } from 'react-redux'
import { ChakraProvider } from "@chakra-ui/react"
import { useStore } from '../store'
import { NextWebVitalsMetric } from 'next/dist/next-server/lib/utils'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}