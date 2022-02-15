import  React, {useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {PERSONAS_CREADAS_ENDPOINT} from '../helpers/endpoints';
import '@fontsource/roboto/300.css';



function Personas(){
    const [listadoPersonas, setListadoPersonas] = useState([]);
    const [fetching, setFeching] = useState(true);

    useEffect(()=>{
        axios.get(PERSONAS_CREADAS_ENDPOINT,{ 
            headers: { 
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              }
     })
        .then(response => {               
        setListadoPersonas(response.listadoPersonas);
        setFeching(false);
    }).catch(e => {
        console.error(e);
        setFeching(false);
        })
    }, []);

    const columns = [   
        { field: 'id', headerName: 'ID', width: 50 },    
        { field: 'tipo_documento', headerName: 'Tipo Documento', width: 140 },
        { field: 'documento',  headerName: 'Documento',  type: 'number',   width: 130, },
        { field: 'nombres', headerName: 'Nombres', width: 150 },
        { field: 'apellidos', headerName: 'Apellidos', width: 150 },  
        { field: 'hobbie', headerName: 'Hobbie', width: 180 },
     
     ];

     const rows = listadoPersonas.map((row) => row({
         id: row.id,
         tipo_documento: row.tipo_documento,
         documento: row.documento,
         nombres: row.nombres,
         apellidos: row.apellidos,
         hobbie: row.hobbie,

     }))


    console.log(listadoPersonas)
    return <div style={{height:100, width:'80%'}} >
        <h2>Lista de Personas</h2>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            />
            {fetching}  
             
            {fetching  && <h3>no hay</h3>} 
        </div>
}
 
 export {Personas}




