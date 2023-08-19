import { Provider as ReduxProvider } from 'react-redux'

import { store } from './store-redux'
import { PlayerPageWithRedux } from './pages/PlayerRedux'
import { PlayerPageWithZustand } from './pages/PlayerZustand'
import { ChevronsLeftRight } from 'lucide-react'

export function App() {
  return (
    <div className="h-full flex flex-col">
      <div>
        <ReduxProvider store={store}>
          <PlayerPageWithRedux />
        </ReduxProvider>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-zinc-800 z-10" />
        </div>
        <div className="relative flex justify-center bg-zinc-950">
          <span className="bg-zinc-800 px-2 text-zinc-200 z-20">
            <ChevronsLeftRight
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
      <div>
        <PlayerPageWithZustand />
      </div>
    </div>
  )
}
