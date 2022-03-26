import  React, {useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {PERSONAS_CREADAS_ENDPOINT} from '../helpers/endpoints';
import '@fontsource/roboto/300.css';
import axios from 'axios';
import Box from '@mui/material/Box';

function Personas(){
    const [data, setListadoPersonas] = useState([]);

    const fetchPersonas = async() => {
       await axios.get(PERSONAS_CREADAS_ENDPOINT).then((response) => {
                setListadoPersonas(response.data);
            })
      }
      useEffect(()=>{
        fetchPersonas();
      },[]);
      
    const columns = [   
        { field: 'id', headerName: 'ID', width: 50 },    
        { field: 'tipo_documento', headerName: 'Tipo Documento', width: 140 },
        { field: 'documento',  headerName: 'Documento',  type: 'number',   width: 130, },
        { field: 'nombres', headerName: 'Nombres', width: 150 },
        { field: 'apellidos', headerName: 'Apellidos', width: 150 },  
        { field: 'hobbie', headerName: 'Hobbie', width: 180 },
     
     ];

     const rows = data.map((row) =>({
         id: row.id,
         tipo_documento: row.tipo_documento,
         documento: row.documento,
         nombres: row.nombres,
         apellidos: row.apellidos,
         hobbie: row.hobbie,

     }));


    console.log(data);
    return(
        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
            <Box  sx={{
            width: '80%',
            height: 350,
            }}>
                <h2>Lista de Personas</h2>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    /> 
            </Box>
        </Box>
    ) 
        
}
 
 export {Personas}




