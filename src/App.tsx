import { Provider as ReduxProvider } from 'react-redux'

import { store } from './store'
import { PlayerPage } from './pages/Player'

export function App() {
  return (
    <ReduxProvider store={store}>
      <PlayerPage />
    </ReduxProvider>
  )
}
