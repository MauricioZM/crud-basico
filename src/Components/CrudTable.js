import React from "react";
import CrudTableRow from "./CrudTableRow";

export default function CrudTable ({data, setDataToEdit, deleteData}) {

    return (
      <div>
        <h3>Tabla de datos</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Constellation</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Conditional Render */}
            {data.length === 0 ? (
              <tr>
                <td colSpan="3">Sin datos</td>
              </tr>
            ) : (
              data.map((el) => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
            )}
          </tbody>
        </table>
      </div>
    );
  
}
