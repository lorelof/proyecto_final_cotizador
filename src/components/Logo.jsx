import logoImagen from '/imagenes/logo_bc.png';
import { BsFillCalculatorFill } from "react-icons/bs";
import '../stylesheets/logo.css';

const Logo = ()=>{
  const fontStyles = {color: '#555E7B', fontSize: '90px'};

    return (
      <>
        <section className='contenedor-icono'>      
          <BsFillCalculatorFill 
                className='icono-calculadora'
                style={fontStyles}/>    
                      
        <img 
          src={logoImagen} 
          alt="logo de Bolívar Contable"
          className={'logo-imagen'}
          />
        </section>
      </>
    )
}
export default Logo;