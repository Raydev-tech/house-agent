import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Properties from './Pages/Properties'
import ReadyToFindHome from './Pages/Cta'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='properties' element={<Properties />} />
            <Route path='readytofindhome' element={<ReadyToFindHome />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App
