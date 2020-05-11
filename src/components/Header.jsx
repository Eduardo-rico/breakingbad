import React from 'react'

export default function Header(props) {
    const {titulo} = props
    return (
        <div>
           <h1 className="encabezado">{titulo}</h1> 
        </div>
    )
}
