import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

class Testimonio extends React.Component {

  render() {
    const nombreAlt = `Fotografía de ${this.props.datosPersona.nombre}`

    let testimonioNegritas = this.props.datosPersona.testimonio;
    console.log('this.props.datosPersona.testimonio= ',this.props.datosPersona.testimonio)
  
    if (this.props.datosPersona.testimonio.includes(this.props.datosPersona.negritas)) {
      let testimonioDivido = this.props.datosPersona.testimonio.split(this.props.datosPersona.negritas);
      testimonioNegritas = (
        <span>
          {testimonioDivido[0]}
          <strong>{this.props.datosPersona.negritas}</strong>
          {testimonioDivido[1]}
        </span>
      )
    }
    return (
      <div className='contenedor-testimonio'>
        <img
          className='imagen-testimonio'
          src={require(`../imagenes/testimonio-${this.props.datosPersona.imagen}.png`)}
          alt= {nombreAlt} />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-y-pais-testimonio'>
            <strong>{this.props.datosPersona.nombre}</strong> en {this.props.datosPersona.pais}
          </p>
          <p className='puesto-y-empresa-testimonio'>
            {this.props.datosPersona.puesto} en <strong>{this.props.datosPersona.empresa}</strong>
          </p>
          <p className='texto-testimonio'>"{testimonioNegritas}"</p>
        </div>
      </div>
    );
  }
}


export default Testimonio;