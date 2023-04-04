import { Box } from '@mui/material'
import React from 'react'
import { Sidebar } from '../components'

const Home = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
        <Box sx={{display:'flex', flex:.5}}>
          <Sidebar />
        </Box>
        <Box sx={{display:'flex', flex:2, p:4}}>
          ASDS
        </Box>
    </Box>
  )
}

export default Home