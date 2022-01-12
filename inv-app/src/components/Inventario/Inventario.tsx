import React from 'react'
import {Outlet} from 'react-router-dom'

const Inventario = () => {
    return (
        <div className="content2">
            <Outlet></Outlet>
            <h1>inventario</h1>
        </div>
    )
}

export default Inventario
