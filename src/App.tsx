import { Provider as ReduxProvider } from 'react-redux'

import { store } from './store-redux'
import { PlayerPageWithRedux } from './pages/PlayerRedux'
import { PlayerPageWithZustand } from './pages/PlayerZustand'

export function App() {
  return (
    <div className="min-h-screen flex flex-col px-2 bg-zinc-950">
      <ReduxProvider store={store}>
        <PlayerPageWithRedux />
      </ReduxProvider>

      <PlayerPageWithZustand />
    </div>
  )
}
