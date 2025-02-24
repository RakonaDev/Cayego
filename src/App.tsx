import './App.css'
import DialogProvider from './context/DialogProvider'
import { Routing } from './routes/Routing'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <>

      <QueryClientProvider client={queryClient}>
        <DialogProvider>
          <Routing />
        </DialogProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
