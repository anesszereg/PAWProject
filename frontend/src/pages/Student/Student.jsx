import React from 'react'
import Sidebar from '../../Components/nav/Sidebar'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {MdMoreVert} from 'react-icons/md';
import '../../Components/HomeDashboard/HomeDashboard.css'; 


function Student() {


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 170 },
    { field: 'module', headerName: 'module', width: 180 },
    { field: 'Type', headerName: 'Type', width: 180,},
    {
      field: 'NoteAffiche',
      headerName: 'NoteAffiche',
      width: 160,
    },
    {
      field: 'NoteReal',
      headerName: 'Note Real',
      width: 160,
     
    },
    {
      field: 'Status',
      headerName: 'Status',
      width: 160,
     
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 70,
      renderCell: () => (
        <IconButton>
          <MdMoreVert />
        </IconButton>
      ),
    },
  ];
  
  const rows = [
    {
      name: 'Willem',
      module: 'ASD',
      NoteAffiche: 10,
      id: 35,
      NoteReal: 35,
      actions: '',
      Type:'CC',
      Status:'favorable'
    },
    {
      name: 'Salim',
      module: 'ADO',
      NoteAffiche: 10,
      id: 42,
      NoteReal: 65,
      actions: '',
      Type:'CC',
      Status:'favorable'
    },
    {
      name: 'Sidali',
      module: 'TDG',
      NoteAffiche: 2,
      id: 45,
      NoteReal: 35,
      actions: '',
      Type:'CC',
      Status:'favorable'
    },
    {
      name: 'Willem',
      module: 'Asi',
      NoteAffiche: 0,
      id: 16,
      NoteReal: 35,
      actions: '',
      Type:'CC',
      Status:'favorable'
    },
    {
      name: 'Willem',
      module: 'SAD',
      NoteAffiche:2,
      id: 17,
      NoteReal: 35,
      actions: '',
      Type:'CC',
      Status:'favorable'
    },
    {
      name: 'Willem',
      module: 'sad',
      NoteAffiche: 2,
      id: 150,
      NoteReal: 35,
      actions: '',
      Type:'CC',
      Status:'favorable'
    },
    {
      name: 'Willem',
      module: 'Paw',
      NoteAffiche: 4,
      id: 44,
      NoteReal: 35,
      actions: '',
      Type:'CC',
      Status:'favorable'
    },
    {
      name: 'Willem',
      module: 'Sm',
      NoteAffiche: 5,
      id: 36,
      NoteReal: 35,
      actions: '',
      Type:'CC',
      Status:'favorable'
    },
    {
      name: 'Willem',
      module: 'Poo',
      NoteAffiche: 12,
      id: 65,
      NoteReal: 35,
      actions: '',
      Type:'CC',
      Status:'favorable'
    },
  ];
  
  return (
<Box display={'flex'}> 
<Sidebar  />

<Box padding={'100px 30px'}  >

<div style={{ height: '100%', width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10},
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            />
        </div>
            </Box>

</Box>
  )
}

export default Student