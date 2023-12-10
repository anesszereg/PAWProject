
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import {MdMoreVert} from 'react-icons/md';
import './HomeDashboard.css';


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


const HomeDashboard = () => {
  return (
    <div style={{ marginLeft: '250px', padding: '20px' }}>
      {/* <div className="firstLine">
        <AnalyticsCard/>
        <BestStudent/>
        <div className="classProgress">
          <h4>Classes Progress</h4>
          <img src={ClassGraph} />
        </div>
      </div> */}
      <div className="secondLine">
        {/* <div className="moduleCourses">
          <div className="top">
            <div>
              <h2>Latest Course</h2>
              <p>780 questions</p>
            </div>
            <IconButton>
              <MdMoreVert />
            </IconButton>
          </div>
        <Box height={'60px'} width={'100%'} display={'flex'} gap='12px' padding={'20px'}>

        <Box sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          height:"42px",
          width:'42px',
          backgroundColor:'#D9D9D9',
          borderRadius:'8px'



        }}>
          <AiOutlineLaptop size={25} color='#000' />

        </Box>
        <Box >

          <Typography fontSize={'18px'} fontWeight={'500'} textAlign={'start'} color={'#000'}>development</Typography>
          <Typography fontSize={'10px'} fontWeight={'400'} textAlign={'start'} color={'#000'}>120 Questions</Typography>
        </Box>

        </Box>
        </div> */}
        <div style={{ height: '100%', width: '100%', marginLeft: '10px' }}>
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
      </div>
    </div>
  );
}

export default HomeDashboard