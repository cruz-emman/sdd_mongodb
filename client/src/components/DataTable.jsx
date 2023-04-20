import * as React from 'react';
import {Box, Typography} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { publicRequest } from '../utils/publicRequest';
import { useSelector } from 'react-redux';




const DataTable = () => {  

  const {currentUser} = useSelector((state) => state.auth)
  const {email} = currentUser


  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true)

  
  useEffect(() =>{
    const getData = async () =>{
      setLoading(true)
      try {
          const res = await publicRequest.get(`/completed/getSurveyByUser?email=${email}`)
          setData(res.data)
          setLoading(false)
      } catch (error) {
          console.log(error)
          setLoading(false)

      }
  }
  getData()
  },[setData])

  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      width: 400,
      renderCell: (params) =>{
        return(
            `${params.row._id}`
          )
      }
    },
    {
      field: 'createdAt',
      headerName: 'Date',
      width: 300,
      filterable: true,
      renderCell: (params) => {
        const date = params.row.createdAt.split("T")[0]; // Extract the date portion
        return date;
          },
    }
      
  ];
  
  return (
    <Box sx={{ height: '90%', width: '100%', boxShadow:3 }}>
    <DataGrid
      {...data}
      rows={loading ? [] : data}
      getRowId={(row) => row._id}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      slots={{ toolbar: GridToolbar }}
      disableRowSelectionOnClick
    />
  </Box>
  )
}

export default DataTable