import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Historial from './Historial'
import Layout from './Layout'
import NotFound from './NotFound.jsx'

function App() {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='historial' element={<Historial />} />
        </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>      
      </BrowserRouter>
    </>
  )
}
export default App;
