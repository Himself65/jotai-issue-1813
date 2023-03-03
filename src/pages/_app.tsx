import type { AppProps } from 'next/app'
import { Provider, createStore } from 'jotai'

const jotaiStore = createStore()

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store={jotaiStore}>
      <Component {...pageProps} />
    </Provider>
  )
}
