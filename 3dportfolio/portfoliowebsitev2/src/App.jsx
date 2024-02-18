import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const App = () => {

  return (
    <div> 
      <BrowserRouter>
        <Navbar/>
        <Hero/>
      </BrowserRouter>
    </div>
  )
}

export default App
