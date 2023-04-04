import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { Sidebar } from '../../components'
import BeatLoader from "react-spinners/BeatLoader";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {  usersRequest } from '../../utils/publicRequest';


const EditUser = () => {

  const {id} = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const pathname = location.pathname.split('/')[1]



  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [info,setInfo] = useState({
    user_number: '',
    user_category: '',
    user_password: ''
  })


  

  useEffect(() =>{
   
    const getStudentssUser = async () =>{
        try {
            const res = await usersRequest.get(`/find/${id}`)
            setInfo({
              user_number: res.data[0].user_number || "",
              user_category: res.data[0].user_category || '',
              user_password: res.data[0].user_password
            })
         
            setLoading(false)
        } catch (error) {
            console.log({message: error.message})
        }
    }
    getStudentssUser()

  },[setData,pathname])

  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      await usersRequest.put(`/${id}`, info)
      navigate(`/${pathname}`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setInfo(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  
  console.log(info)


  return (
    <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
        <Box sx={{display:'flex', flex:.5}}>
          <Sidebar />
        </Box>
        <Box sx={{display:'flex', flex:2, p:4}}>

          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:"20px", width: '100%'}}>
            <Typography fontWeight={700} variant="h4" color="text.secondary">Edit User</Typography>
            <TextField onChange={handleChange}  value={info.user_number} name="user_number" label="User Number" />

            <TextField onChange={handleChange}  value={info.user_password} name="user_password" label="User Password" />
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

export default EditUser