import { Link } from 'react-router-dom';

import cat from '/imagenes/notFound_cat.jpg'

const NotFound = ()=> {
  return (
    <>
      <h2 className='titulo-notFound'>Error 404, No Encontrado <Link to={'/'}>Volver</Link></h2>
      <section className='contenedor-img'>
        <img 
          src={cat} 
          alt="meme de Not Found"
          className={'imagen-notFound'}
          />
      </section>
    </>
  )
  
}
export default NotFound;