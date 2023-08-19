import { Provider as ReduxProvider } from 'react-redux'

import { store } from './store-redux'
import { PlayerPageWithRedux } from './pages/PlayerRedux'

export function App() {
  return (
    <div className="h-full flex flex-col gap-6">
      <ReduxProvider store={store}>
        <PlayerPageWithRedux />
      </ReduxProvider>
      <div>
        <h2>Gerenciando estado com Zustand</h2>
        <p>Componete de entrada Zustand</p>
      </div>
    </div>
  )
}
