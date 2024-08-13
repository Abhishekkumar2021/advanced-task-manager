import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-taskbg bg-center bg-zinc-100 w-full min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
