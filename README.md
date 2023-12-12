proyecto_final_cotizador
Es una app, que te permite seleccionar (a través de 2 select y 1 input range):
  1). Tipo de contribuyente
  2). Impuesto que necesita liquidar
  3). Cantidad de declaraciones juradas
El botón cotizar te arroja el total cotizado, siempre y cuando estén todos los
campos completos.
Al lado del precio total, hay un ícono para guardar la cotización en el historial.
En el link Historial: Aparece la lista con el detalle de las cotizaciones
que se han guardado.
En App.jsx, está el enrutador:
  - Layout contiene el logo (componente) y el nav con los links a Home y a Historial.
  - Y la ruta notFound, por si ingresan un link distinto, hay un título con una imagen y un link para volver al Home.
  - Home => renderiza el componente Formularios.
  - Formularios => En principio, hace el fetch del json y setea los 2 grandes grupos: situación fiscal y ddjj. El estado de Historial, si hay algo guardado, parsea los datos y si no setea un arreglo vacío. El efecto del historial, es el
que mantiene el local Storage actualizado.
La función mostrarAlertaGuardado setea el historial y muestra el alert.
La función mostrarAlertaCotizar si están todos los campos completos, calcula la
cotización.
