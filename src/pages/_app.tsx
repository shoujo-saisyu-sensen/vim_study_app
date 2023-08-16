import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { ModeContext } from '@/context/modeContext'
import { useMode } from '@/hooks/useMode'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { mode, setMode } = useMode()

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <Component {...pageProps} />
    </ModeContext.Provider>
  )
}

export default MyApp
