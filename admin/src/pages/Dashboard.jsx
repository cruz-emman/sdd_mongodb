import { Box, Typography } from '@mui/material'
import React,{ useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import RespondentsChart from '../components/RespondentsChart'
import { useSelector } from 'react-redux'
import {publicRequest} from '../utils/publicRequest' 
import PieChartResults from '../components/Charts/PieChartResults'
import BarChartResults from '../components/Charts/BarChartResults'
import PersonalExperienceTable from '../components/Tables/PersonalExperienceTable'
import BeliefsTable from '../components/Tables/BeliefsTable'

const Dashboard = () => {

  const {admin} = useSelector((state) => state.admin)
  const {affiliation, superAdmin} = admin

  
  const no_underscore_affiliation = affiliation.replace(/_/g, " ")
  const getCategory = affiliation.split("_")[1]


  const [getTotal, setGetTotal] = useState()
  const [loading, setLoading] = useState(true)
  const [ageData, setAgeData] = useState([])
  const [genderData, setGenderData] = useState([])
  const [civilData, setCivilData] = useState([])
  const [ethnicityData, setEthnicityData] = useState([])

  useEffect(() =>{
    setLoading(true)

    const getTotal = async () =>{
      try {
        if(superAdmin === true){
          setGetTotal(res.data)

        }else if(superAdmin === false){
          const res = await publicRequest.get(`/completed/getTotalAffiliation?affiliate=${affiliation}`)

          const getAge = await publicRequest.get(`/results/resultChart?question_order=1&affiliate=${affiliation}&part=part1`)
          setAgeData(getAge.data)

          const getGender = await publicRequest.get(`/results/resultChart?question_order=2&affiliate=${affiliation}&part=part1`)
          setGenderData(getGender.data)

          const getCivil = await publicRequest.get(`/results/resultChart?question_order=4&affiliate=${affiliation}&part=part1`)
          setCivilData(getCivil.data)

          const getEthnicity = await publicRequest.get(`/results/resultChart?question_order=5&affiliate=${affiliation}&part=part1`)
          setEthnicityData(getEthnicity.data)

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
        <Box sx={{display:'flex', flexWrap:'wrap', p:4, gap:4, alignItems:'center', justifyContent:'center' , flexDirection:'column', width: '100%'}}>
        <Typography variant='h3' color="black">FACULTY DASHBOARD</Typography>
          {/* AGE */}
          <Box sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}  >Age</Typography>
            <PieChartResults data={ageData} />
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Gender</Typography>
            <PieChartResults data={genderData} />
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Civil Status</Typography>
            <PieChartResults data={civilData} />
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Ethnicity</Typography>
            <BarChartResults data={ethnicityData} />
          </Box>

          <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 2</Typography>
          <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>

          <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2', width:'100%'}}>
          <Typography variant="h6" fontWeight={700}  >Personal Experience</Typography>
          <PersonalExperienceTable/>

          {/* <Typography variant="h6" fontWeight={700}  >Beliefs, Opinions and Thoughts</Typography>
          <BeliefsTable /> */}
          </Box>

        </Box>

        <Box sx={{ display:'flex', width:'100%', height:'100%', justifyContent:'center', flexDirection:'column', gap: 2 }}>

        

        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard