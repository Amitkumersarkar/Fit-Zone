import './App.css'
import Navbar from './components/Header/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <div className='w-11/12 mx-auto p-3'>

      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
    </div>


  )
}

export default App
