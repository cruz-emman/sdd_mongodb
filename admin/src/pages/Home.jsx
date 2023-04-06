import { Box, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import RespondentsChart from '../components/RespondentsChart'
import { useSelector } from 'react-redux'
const Home = () => {



  return (
    <Box sx={{display:'flex'}}>
      <Sidebar />
      <Box sx={{display:'flex', flex:6, flexDirection:'column'}}>
        <Navbar />
        <Box sx={{display:'flex', flexWrap:'wrap', p:4, gap:4, alignItems:'center', justifyContent:'center' }}>

            <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#1e88e5"}}>
              <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>Students</Typography>
              <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', width: '100%',}} >
              <Typography variant="h2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700'}}>Total</Typography>
              </Box>
            </Box>

            <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#00c853"}}>
              <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>Employees</Typography>
              <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', width: '100%',}} >
              <Typography variant="h2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700'}}>Total</Typography>
              </Box>
            </Box>

            <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#673ab7"}}>
              <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>Faculty</Typography>
              <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', width: '100%',}} >
              <Typography variant="h2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700'}}>Total</Typography>
              </Box>
            </Box>

          
        </Box>
        <Box sx={{p:4, height: '95%', width: '100%'}}>
          <RespondentsChart />
        </Box>
      </Box>
    </Box>
  )
}

export default Home