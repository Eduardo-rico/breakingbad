import React, { Fragment, useState } from 'react';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {

  //crear listado de productos 
  //todo lo que reacciona al usuario const [elState, laFuncionQueCambiaElEstado] = setState(valorInicial); se usa arraydestructuring
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: 'camisa react js', precio: 50},
    {id: 2, nombre: 'falda angular js', precio: 65},
    {id: 3, nombre: 'pantalon vue js', precio: 12},
    {id: 4, nombre: 'react native js', precio: 233}
  ])


  //state para un carrito de compras, se pueden tener muchos states
  /**
   * 1.- se crea el estado con la funcion que modifica al estado extraidas desde useState y a èste se le dan los valores iniciales
   * 2.- se manda el estado y la funcion al componente hijo
   * 3.- en el componente hijo se hace una funcion para seleccionar un producto u objeto, y dentro de esta funcion se usa la funcion para modificar el estado
   * 4.- la funcion que modificia el estado tiene que tener una copia del estado anterior asi: agregarProductos([ ...carrito, nuevacosa])
   */
  const [carrito, agregarProductos] = useState([])

  //obtener fecha
  const fecha = new Date().getFullYear()

  return (
    <Fragment>
      <Header titulo = 'Tienda virtual'/>
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto 
          producto={producto} 
          productos = {productos}
          key={producto.id}
          carrito = {carrito}
          agregarProductos = {agregarProductos} //esta es una funcion que agrega cosas al state
        />
      ))}
      <Carrito carrito={carrito} agregarProductos={agregarProductos}/>
      <Footer fecha = { fecha }/>
    </Fragment>
  );
}

export default App;
