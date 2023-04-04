import { Box, Button, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { Sidebar } from '../../components'
import BeatLoader from "react-spinners/BeatLoader";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link, useLocation } from 'react-router-dom';
import {  usersRequest } from '../../utils/publicRequest';


const StudentsUser = () => {

  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const pathname = location.pathname.split('/')[1]


  useEffect(() =>{
   
    const getStudentssUser = async () =>{
        try {
            const res = await usersRequest.get('/')
            let filteredUser = res.data.filter((item) => item.user_category === 'students')
            setData(filteredUser)
            setLoading(false)
        } catch (error) {
            console.log({message: error.message})
        }
    }
    getStudentssUser()

  },[setData])

  const handleDelete = async (e) =>{
    try {
        await usersRequest.delete(`/${e.user_id}`)
        setData(prev => prev.filter(row => row.user_id !== e.user_id))
    } catch (error) {
        console.log(error)
    }
  }

  const columns = [
    
    { field: 'user_number', headerName: 'User Number', width: 500 },
    { field: 'user_category', headerName: 'Category', width: 400 },
    {
      field: 'action',
      headerName: 'Action',
      width: 500, // Increase width to make it wider
      renderCell: (params) => {
        return (
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1 }}>

          <Link to={`/${pathname}/edit/${params.row.user_id}`}>
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
    <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
        <Box sx={{display:'flex', flex:.5}}>
          <Sidebar />
        </Box>
        <Box sx={{display:'flex', flex:2, p:4}}>

        <Box sx={{display:'flex', flexDirection:'column', gap:2, width: '100%'}}>

          <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', width: '100%'}}> 
            <Typography  variant='h5' color="text.disabled" sx={{fontWeight:"bold", textTransform: 'uppercase'}}>Students Users</Typography>
            
            <Link to={`/${pathname}/add`}>
              <Button variant='contained' color="success">Add User</Button>
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
                getRowId={(row) => row[`user_id`]}
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