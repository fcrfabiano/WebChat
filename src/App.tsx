import './App.css'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'
import { ChatProvider } from './hooks/useChat'

function App() {
  return (
    <ChatProvider>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </ChatProvider>
  )
}

export default App
