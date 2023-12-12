import { Link, Outlet } from 'react-router-dom';
import Logo from './components/Logo';
import './stylesheets/layout.css'

const Layout = ()=> {
  return (
    <>      
      <section className='contenedor-logo'>
          <Logo />
      </section>
      <nav className='nav-menu'>
        <Link to={'/'}>Home</Link>
        <Link to={'/historial'}>Historial</Link>        
      </nav>
      <Outlet />       
    </>  
  )
}
export default Layout;