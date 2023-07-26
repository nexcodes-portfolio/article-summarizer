import './App.css'

import Hero from './components/Hero.tsx'
import Demo from './Components/Demo.tsx'

const App = () => {
  return (
    <>
      <main>
        <div className="main">
          <div className='gradient' />
        </div>
        <div className="app">
          <Hero />
          <Demo />
        </div>
      </main>
    </>
  )
}

export default App