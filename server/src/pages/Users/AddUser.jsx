import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { Sidebar } from '../../components'
import BeatLoader from "react-spinners/BeatLoader";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  usersRequest } from '../../utils/publicRequest';


const AddUser = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const pathname = location.pathname.split('/')[1]

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [info,setInfo] = useState({
    user_number: '',
    user_category: '',
    user_password: 'ChangeMe!23'
  })


  
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      await usersRequest.post('/', info)
      navigate(`/${pathname}`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setInfo(prev => ({...prev, [e.target.name]: e.target.value}))
  }


  return (
    <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
        <Box sx={{display:'flex', flex:.5}}>
          <Sidebar />
        </Box>
        <Box sx={{display:'flex', flex:2, p:4}}>

          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:"20px", width: '100%'}}>
            <Typography fontWeight={700} variant="h4" color="text.secondary">Add User</Typography>
            <TextField onChange={handleChange} name="user_number" label="User Number" />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="user_category"
                value={info.user_category}
                onChange={handleChange}
              
              >
                <MenuItem value={"students"}>Students</MenuItem>
                <MenuItem value={"faculty"}>Faculty</MenuItem>
                <MenuItem value={"employees"}>Employees</MenuItem>
              </Select>
            </FormControl>

            <Button type="submit" fullWidth variant="contained" size="large">Add New User</Button>
          </form>
      </Box>
    </Box>
  )
}

export default AddUser