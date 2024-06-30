import './App.css'
import Brand from './assets/components/Brand'
import Carousel from './assets/components/Carrousel'
import Navbar from './assets/components/Navbar'

function App() {

  return (
    <>
      <div className='container-fluid fondo-negro text-white lato-light'>
        <Brand />
        <Navbar />
        <Carousel />
      </div>
    </>
  )
}

export default App
