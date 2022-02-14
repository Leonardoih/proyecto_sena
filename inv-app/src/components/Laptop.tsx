import React, { useState } from "react";
import {Dato} from "./Interface"

const ListaDatos = () => {
  const [datos, setDatos] = useState<Dato[]>([])
}

const Laptop = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Serial</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Estado</th>
            <th>Usuario</th>
            <th>Ultimo Analista</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5CG92710PS</td>
            <td>HP</td>
            <td>830 G6</td>
            <td>Usuario</td>
            <td>Leoizqhe</td>
            <td>Leoizqhe</td>
          </tr>
          <tr>
            <td>5CG92710PS</td>
            <td>HP</td>
            <td>830 G6</td>
            <td>Usuario</td>
            <td>Leoizqhe</td>
            <td>Leoizqhe</td>
          </tr>
          <tr>
            <td>5CG92710PS</td>
            <td>HP</td>
            <td>830 G6</td>
            <td>Usuario</td>
            <td>Leoizqhe</td>
            <td>Leoizqhe</td>
          </tr>
          <tr>
            <td>5CG92710PS</td>
            <td>HP</td>
            <td>830 G6</td>
            <td>Usuario</td>
            <td>Leoizqhe</td>
            <td>Leoizqhe</td>
          </tr>
          <tr>
            <td>5CG92710PS</td>
            <td>HP</td>
            <td>830 G6</td>
            <td>Usuario</td>
            <td>Leoizqhe</td>
            <td>Leoizqhe</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Laptop;
