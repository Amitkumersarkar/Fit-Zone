import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Header/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LChart from './LineChart/LChart'

function App() {

  return (
    <div className='w-11/12 mx-auto p-3'>

      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LChart></LChart>
      <Footer></Footer>
    </div>


  )
}

export default App
