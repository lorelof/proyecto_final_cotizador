import { useEffect, useState } from 'react';
import '../stylesheets/formularios.css';
import Swal from 'sweetalert2';
import { FaSave } from "react-icons/fa";

const Formularios = (props)=> {  

  const [data, setData]=useState([]);
  
  const [loading, setLoading]= useState(true);
  const [error, setError]= useState(null);
  const [situacionFiscal, setSituacionFiscal]= useState([]);
  const [ddjj, setDdjj]= useState([]);
  const [impuestoA, setImpuestoA]=useState(null);
  const [impuestoB, setImpuestoB]=useState(null);
  const [value, setValue]=useState(null);
  const [total, setTotal]=useState(null);
  
  const fontStyles = {color: '#555E7B', fontSize: '30px'};

  useEffect(()=>{
    fetch('/data/data.json')
    .then((resp)=>resp.json())
    .then((datos)=>{
      setSituacionFiscal(datos.filter(({ tipo }) => tipo == "Situacion Fiscal"));
      setDdjj(datos.filter(({ tipo }) => tipo == "DDJJ"));       
    })
    .catch((error)=>{
      setError(error.message);
      setTimeout(()=>setLoading(false), 1000);
    })
    .finally(()=>setTimeout(()=>setLoading(false), 1500));
  }, []);

  useEffect(()=>{
    setData(data? true : false)
  }, [data])      

  const [historial, setHistorial]=useState(()=>{
    const storage = localStorage.getItem("guardado");
    if (storage) return JSON.parse(storage);    
      localStorage.setItem("guardado", JSON.stringify([]));
      return [];
  });    
         
    useEffect(()=>
      localStorage.setItem("guardado", JSON.stringify(historial)), [historial]);
      
    const mostrarAlertaGuardado=()=>{
      console.log(situacionFiscal.find(({impuesto})=>{if(impuesto.id==impuestoA) return impuesto.impuesto}));
      console.log(situacionFiscal);
      setHistorial(
        [...historial, 
          {
            Fecha:new Date().toDateString(), 
            Hora: new Date().toLocaleTimeString(),
            Contribuyente: situacionFiscal.find(({id})=>(id)==impuestoA), 
            Impuesto: ddjj.find(({id})=>id==ddjj), 
            CantidadDDJJ: cantidad.value, 
            Total: total.toFixed(2),
          },
        ]);        
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tu cotización se ha guardado",
          showConfirmButton: false,
          timer: 1500
        });        
          setTotal(null)
  }
      
      const mostrarAlertaCotizar=e=>{
        e.preventDefault();  
        setLoading(true);
        setTimeout((e)=>{
          setTotal(10000 * parseInt(value) * impuestoA * impuestoB);
          console.log(total);
          setLoading(false);
        }, 2000)   
        e.target.reset();
        if(situacionFiscal == "#" || ddjj == "#" || value <= 0) {         
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops...",
            text: "Debe seleccionar una opción para continuar",
            timer: 1000
          });
          e.target.reset();
        }
        else {
          Swal.fire({
            position: "center",
            title: "La cotización fue realizada con éxito",
            icon: "success",
            timer: 1500
          });
          e.target.reset();        
        }  
      }
      
      return (
        <>          
          <h1 className='titulo-formulario'>Cotizador de Servicios Contables</h1>
          <h2 className='subtitulo-form'>Complete los datos solicitados</h2>
      
          <form onSubmit={mostrarAlertaCotizar} >                             
          <fieldset>
            <label htmlFor="contribuyente" className='label-form'>
            Seleccione la Situación Fiscal
            </label>                            
              <select 
                id="contribuyente"
                className='formulario-datos'
                name='contrib'
                type="text"
                onChange={({target})=>setImpuestoA(target.value)}>
                <option value="#"></option>   
                  { !loading && !error && situacionFiscal.length>0 ?   
                  (situacionFiscal.map(({id, impuesto, increment})=>(
                    <option key={id} id={id} value={increment} name={impuesto}> 
                      {impuesto} 
                    </option>))) :"#"}                             
              </select>       
              </fieldset>            

              <fieldset> 
              <label htmlFor="impuesto" className='label-form'>Seleccione el Impuesto a Liquidar</label>   
                <select                   
                  id="impuesto"
                  className='formulario-datos'
                  type="text"
                  onChange={({target})=>setImpuestoB(target.value)} >
                   
                <option value="#"></option>   
                  { !loading && !error && ddjj.length>0 ?    
                  (ddjj.map((dj)=>(
                    <option key={dj.id} value={dj.increment} name={dj.impuesto}>
                      {dj.impuesto}
                    </option>))) :"#"}                               
                </select>   
                </fieldset>       

                <fieldset>
                  <label htmlFor="cantidad" className='label-form'>Cantidad de DDJJ <span>{value}</span></label>
                  <input 
                    type="range" 
                    name="cantidad" 
                    id="cantidad" 
                    min={0}
                    max={12}
                    step={1}
                    defaultValue={1}
                    onInput={({target})=>setValue(target.value)}
                  />
                </fieldset>
                
          <section className='contenedor-boton'>
            <button 
              className='boton-cotizar'
              type='submit'>
              Cotizar  
            </button>
          </section>   
          </form>
          
          <section className='contenedor-precio'>
            {total && 
              <form onSubmit={(e)=>e.preventDefault()} className='titulo-precio'> Precio estimado: $ {total.toFixed(2)}  <FaSave onClick={mostrarAlertaGuardado}
              style={fontStyles} /> 
              </form>}              
          </section>   
        </>
      )
  }
export default Formularios;
