import Formularios from './components/Formularios'
import './stylesheets/home.css'

const Home = ()=> { 
    
  const agregarCotizacion=(cotizacion)=>{
    console.log(cotizacion);    
  }

  return (
    <>
      <main>
        <section className='contenedor-formularios'>
          <Formularios onSubmit={agregarCotizacion}/>
        </section>    
      </main>
    </>
  )
}
export default Home;