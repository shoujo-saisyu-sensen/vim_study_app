import { useCallback, useState } from 'react'

type Mode = 'top' | 'question' | 'answer' | 'complete'

export type UseModeMethods = {
  mode: Mode
  setMode: (mode: Mode) => void
}

export const useMode = (): UseModeMethods => {
  const [mode, setMode] = useState<Mode>('top')

  const _setMode = useCallback((nextMode: Mode) => {
    setMode(nextMode)
  }, [])

  return {
    mode,
    setMode: _setMode,
  }
}
