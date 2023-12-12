import { useState, useEffect } from "react";
import { FaHistory } from "react-icons/fa";
import './stylesheets/historial.css'
import { RiDeleteBin5Fill } from "react-icons/ri";

const Historial = ()=> {
  const fontStyles = {color: '#555E7B', fontSize: '30px'};
  
  const [historial, setHistorial]=useState(()=>{
    let storage = localStorage.getItem("guardado");
    if(storage) return JSON.parse(storage);
      localStorage.setItem("guardado", JSON.stringify([]));
     return [];
    });    
    
    useEffect(()=>
      localStorage.setItem("guardado", JSON.stringify(historial)), 
      [historial]); 
      console.log(historial);
     
    const limpiarHistorial = ()=>{
      setHistorial([]);
    }

  return (
    <>
      <section>
        <h2 className="titulo-icono">Ver Historial 
        <FaHistory className="icono-historial"
          style={fontStyles}/></h2>         
      </section>
      <section className="contenedor-historial">
        <h2 className="titulo-icono">Limpiar Historial 
        <RiDeleteBin5Fill  className="icono-historial"
          onClick={limpiarHistorial}
          style={fontStyles}/></h2>
        <h2 className="titulo-historial">Historial de cotizaciones</h2>        
        {/* <h4>Impuesto: {h.impuesto}</h4> */}
        <ul className="ul-historial">{historial.map((h)=>(
            <li className="li-historial" key={h.id}>
              <h4>Fecha: {h.Fecha}</h4>
              <h4>Hora: {h.Hora}</h4>
              <h4>Cantidad de ddjj: {h.CantidadDDJJ}</h4>
              <h4>Total Cotizado: $ {h.Total}</h4>              
            </li>))}
        </ul>     
      </section>
      </>    
  )
}
export default Historial;