import React, {useState, useEffect} from 'react'
import { Navbar } from '../components'
import { Box, Button, CircularProgress, Divider, TextField, Typography } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Landing from '../assets/landing.jpg'
import { publicRequest } from '../utils/publicRequest'
import { useSelector } from 'react-redux'
import HistoryTable from '../components/HistoryTable'
import DataTable from '../components/DataTable'
const Profile = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const {currentUser} = useSelector((state) => state.auth)
  const [singleUser, setSingleUser] = useState()
  const [loading, setLoading] = useState(true)
  const [info,setInfo] = useState({
    password: "",
  })


  useEffect(() =>{
    const getUser = async () =>{
      try {
        const res = await publicRequest.get(`users/find/${id}`)
        setInfo({
          password: res.data.password || '',

        })
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getUser()
  },[setSingleUser,id])

  const handleUpdate = async (e) =>{
    e.preventDefault()
    try {
      await publicRequest.put(`users/${id}`, info)
      navigate(0)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setInfo(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  

  
  
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      overflow:'hidden',
    }}>
      <Navbar />
      <Box 
        sx={{
          p: 4,
          display: 'flex', 
          alignItems: 'center',
          backgroundImage: `url(${Landing})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: 'calc(100vh - 70px)',
          position: 'relative', 
          justifyContent: 'center', 
          overflow: 'hidden',
          objectFit:'cover',
          gap: 2,
        }}>
        <Box
          sx={{
            position: 'absolute', 
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1, // Add this
          }}
        />
        
        <Box sx={{zIndex:2, display:'flex',  height: '100%', width: '100%', backgroundColor: 'white', borderRadius: '50px', flexDirection:'column', p:4, gap:2}}>

            {loading ? (
              <CircularProgress />
            ):
            (
              <>
              <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:2}}>
              <Typography fontWeight={700} variant="h5" color="text.disabled">Profile Information</Typography>
              <Box sx={{display:'flex', flexDirection:"row", py:5, alignItems:'center', gap:2}}>
                <TextField
                  id="outlined-read-only-input"
                  label="First Name"
                  defaultValue={currentUser.firstName}
                  disabled
                  InputProps={{
                    readOnly: true,
                  }}
                />                
                <TextField
                  id="outlined-read-only-input"
                  label="Last Name"
                  defaultValue={currentUser.lastName}
                                    disabled

                  InputProps={{
                    readOnly: true,
                  }}
                />                
               <TextField
                  id="outlined-read-only-input"
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  value={info.password}
                />

                <TextField
                  id="outlined-read-only-input"
                  label="Email"
                  defaultValue={currentUser.email}
                                    disabled

                  InputProps={{
                    readOnly: true,
                  }}
                />                
                <TextField
                  id="outlined-read-only-input"
                  label="Category"
                  defaultValue={currentUser.type}
                                    disabled

                  InputProps={{
                    readOnly: true,
                  }}
                />                
                <TextField
                  id="outlined-read-only-input"
                  label="Affiliation"
                  defaultValue={currentUser.affiliation}
                                    disabled

                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
              <Button onClick={handleUpdate} variant="contained" >Update</Button>                
            </Box>
              <Divider />
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:2, height: '400px'}}>
              <Typography fontWeight={700} variant="h5" color="text.disabled">History</Typography>
              <DataTable />
            </Box>
              </>
            )}

        </Box>

      </Box>
      
    </Box>
  )
}

export default Profile

