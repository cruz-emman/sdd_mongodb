import { Box, Button, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { Sidebar } from '../../components'
import BeatLoader from "react-spinners/BeatLoader";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import {  publicRequest } from '../../utils/publicRequest';

import { ToastContainer, toast } from 'react-toastify';

const AdminFaculty = () => {

  const location = useLocation()
  const pathname = location.pathname.split('/')[1]
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const handleSubmitCSV = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('file', e.target.file.files[0]); // Updated to access file input using name 'file'
      await publicRequest.post('/importUser', formData);
      toast.info("Refreshing...")
      navigate(0)
    } catch (error) {
      toast.error("Error uploading file: " + error.message)
    }
  };
  


  useEffect(() =>{
   
    const getFacultysUser = async () =>{
        try {
            const res = await publicRequest.get('/admins')
            //console.log(res.data)
           setData(res.data)
            
            setLoading(false)
        } catch (error) {
            console.log({message: error.message})
        }
    }
    getFacultysUser()

  },[setData])

  const handleDelete = async (e) =>{
    try {
      await publicRequest.delete(`/admins/${e._id}`);
      setData(data.filter((user) => user._id !== e._id));
    } catch (error) {
      console.log({message: error.message})
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
              

            {/* <Button onClick={() =>handleDelete(params.row)} color="error" variant="contained" size="small">
              Delete User
            </Button> */}
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
   
        <Box sx={{display:'flex', alignItems:'center', gap:2}}>
              <Link to={`/${pathname}/addAdmin`}>
                <Button variant='contained' color="success">Add Admin</Button>
              </Link>
      

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

export default AdminFaculty