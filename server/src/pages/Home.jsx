import { Box, Typography } from '@mui/material'
import React from 'react'
import { Sidebar } from '../components'

const Home = () => {
  return (
    <Box sx={{display:'flex'}}>
      <Sidebar />
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flex: 6, flexDirection:'row', height :'100%', width: '100%'}}>
        <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#00c853"}}>
                <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>Employees</Typography>
                <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', width: '100%',}} >
                <Typography variant="h2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700'}}>Total</Typography>
                </Box>
              </Box>

              <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#00c853"}}>
                <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>Faculty</Typography>
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
      </Box>
  )
}

export default Home