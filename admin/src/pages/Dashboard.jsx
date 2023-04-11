import { Box, Typography } from '@mui/material'
import React,{ useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import RespondentsChart from '../components/RespondentsChart'
import { useSelector } from 'react-redux'
import {publicRequest} from '../utils/publicRequest'

const Dashboard = () => {

  const {admin} = useSelector((state) => state.admin)
  const {affiliation, superAdmin} = admin

  
  const no_underscore_affiliation = affiliation.replace(/_/g, " ")
  const getCategory = affiliation.split("_")[1]


  const [getTotal, setGetTotal] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    setLoading(true)

    const getTotal = async () =>{
      try {
        if(superAdmin === true){
          setGetTotal(res.data)

        }else if(superAdmin === false){
          const res = await publicRequest.get(`/completed/getTotalAffiliation?affiliate=${affiliation}`)
          setGetTotal(res.data)
        }
        setLoading(false)
      } catch (error) {
  
        setLoading(false)
      }
    }
    getTotal()
  },[setGetTotal])


  return (
    <Box sx={{display:'flex'}}>
      <Sidebar />
      <Box sx={{display:'flex', flex:6, flexDirection:'column'}}>
        <Navbar />
        <Box sx={{display:'flex', flexWrap:'wrap', p:4, gap:4, alignItems:'center', justifyContent:'center' }}>


          

          
        </Box>
        <Box sx={{p:4, height: '95%', width: '100%', boxShadow:3}}>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard