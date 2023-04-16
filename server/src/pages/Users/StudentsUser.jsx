import { Box, Button, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { Sidebar } from '../../components'
import BeatLoader from "react-spinners/BeatLoader";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link, useLocation, useParams } from 'react-router-dom';
import {  publicRequest } from '../../utils/publicRequest';


const StudentsUser = () => {

  const location = useLocation()
  const pathname = location.pathname.split('/')[1]
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() =>{
   
    const getFacultysUser = async () =>{
        try {
            const res = await publicRequest.get('/users')
            const filteredDate = res.data.filter((user) => user.type === 'students')
            setData(filteredDate)
            
            setLoading(false)
        } catch (error) {
            console.log({message: error.message})
        }
    }
    getFacultysUser()

  },[setData])

  const handleDelete = async (e) =>{
    try {
      await publicRequest.delete(`/users/${e._id}`);
      setData(data.filter((user) => user._id !== e._id));
    } catch (error) {
      console.log({message: error.message})
    }
};

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await publicRequest.post('/users/import-user', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const columns = [
    
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'type', headerName: 'type', width: 200 },
    { field: 'affiliation', headerName: 'Affiliation', width: 200 },
    {
      field: 'action',
      headerName: 'Action',
      width: 500, // Increase width to make it wider
      renderCell: (params) => {
        return (
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1 }}>

            <Link to={`/${pathname}/edit/${params.row._id}`}>
            <Button color="primary" 
                // onClick={() => handleQuestion(params.row[`id${getTable}`])} 
                variant="contained" size="small">
                Edit User
              </Button>
            </Link>
              

            <Button onClick={() =>handleDelete(params.row)} color="error" variant="contained" size="small">
              Delete User
            </Button>
          </Box>
        );
      },
    },
  ];
  
  return (
    <Box sx={{display:'flex'}}>
          <Sidebar />
        <Box sx={{display:'flex', flex:6, p:4}}>

        <Box sx={{display:'flex', flexDirection:'column', gap:2, width: '100%'}}>

          <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', width: '100%'}}> 
            <Typography  variant='h5' color="text.disabled" sx={{fontWeight:"bold", textTransform: 'uppercase'}}>Students Users</Typography>
            
            <Box sx={{display:'flex', alignItems:'center', gap:2}}>
              <Link to={`/${pathname}/add`}>
                <Button variant='contained' color="success">Add User</Button>
              </Link>
                          
              <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <Button variant="contained" type="submit">Import</Button>
              </form>   
            </Box>



          </Box>
          {loading ? (
            <BeatLoader 
            color="#36d7b7" 
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          ):
          (
            <Box sx={{height: '800px'}}>
            <DataGrid
                {...data}
                rows={loading ? [] : data}
                getRowId={(row) => row._id}
                columns={columns}
                pageSize={9}
                components={{ Toolbar: GridToolbar }}
                componentsProps={{
                    toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                  },
                }}
            />
        
            </Box>
            )}
          </Box>
      </Box>
    </Box>
  )
}

export default StudentsUser