import './App.css'
import HeroSection from './components/HeroSection'

import ClickSpark from './components/ui/ClickSpark'

function App() {
  return (
    <div className="app">
      <ClickSpark>
        <HeroSection />
        {/* <div className="fixed bottom-1 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl">
          <FloatingDockDemo />
        </div> */}
      </ClickSpark>
    </div>
  )
}

export default App
