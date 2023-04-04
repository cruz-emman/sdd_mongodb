import { Box, Checkbox, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import PieChartResults from '../components/Charts/PieChartResults'

const FacultyDashboard = () => {
  return (
    <Box sx={{display:'flex'}}>
    <Sidebar />
    <Box sx={{display:'flex', flex:6, flexDirection:'column'}}>
      <Navbar />
      <Box sx={{display:'flex', flexDirection:'column', p:4, gap:4, alignItems:'center', justifyContent:'center' }}>
        <Typography sx={{fontWeight: 700, fontSize: '40px'}}>Faculty Reports</Typography>
            <Box  sx={{height: 600, width:'100%', flexDirection:'column', display:'flex', gap:2}}>
                <Box sx={{display:'flex', height: '100%', width: '100%', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center'}}>
                    <Typography variant="h6" color="text.secondary" fontWeight={300}>Age</Typography>
                        <PieChartResults />
                </Box>


                <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center'}}>
                    <Typography variant="h6" color="text.secondary" fontWeight={300}>Sex assigned at birth</Typography>
                </Box>


            </Box>

           
      </Box>
    </Box>
  </Box>
  )
}

export default FacultyDashboard