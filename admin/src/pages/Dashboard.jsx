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
import Part3Number1 from '../components/Tables/Part3Number1'
import Part3Number2 from '../components/Tables/Part3Number2'
import Part3Number3 from '../components/Tables/Part3Number3'
import Part3Number4 from '../components/Tables/Part3Number4'
import Part3Number5 from '../components/Tables/Part3Number5'
import Part3Number6 from '../components/Tables/Part3Number6'
import Part3Number7 from '../components/Tables/Part3Number7'
import Part3Number8 from '../components/Tables/Part3Number8'
import Part3Number9 from '../components/Tables/Part3Number9'
import Part3Number10 from '../components/Tables/Part3Number10'
import Part3Number11 from '../components/Tables/Part3Number11'
import Part4Number1 from '../components/Tables/Part4Number1'

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
  const [noofchildData, setNoofchildData] = useState([])
  const [ageofchildData, setAgeofchildData] = useState([])
  const [educationData, setEducationData] = useState([])
  const [spouseData, setSpouseData] = useState([])
  const [positionData, setPositionData] = useState([])
  const [placeData, setPlaceData] = useState([])
  const [yearsData, setYearsData] = useState([])
  const [salaryData, setSalaryData] = useState([])

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

          const getNoofchild = await publicRequest.get(`/results/resultChart?question_order=6&affiliate=${affiliation}&part=part1`)
          setNoofchildData(getNoofchild.data)

          const getAgeofchild = await publicRequest.get(`/results/resultChart?question_order=7&affiliate=${affiliation}&part=part1`)
          setAgeofchildData(getAgeofchild.data)

          const getEducation = await publicRequest.get(`/results/resultChart?question_order=8&affiliate=${affiliation}&part=part1`)
          setEducationData(getEducation.data)

          const getSpouse = await publicRequest.get(`/results/resultChart?question_order=10&affiliate=${affiliation}&part=part1`)
          setSpouseData(getSpouse.data)

          const getPlace = await publicRequest.get(`/results/resultChart?question_order=12&affiliate=${affiliation}&part=part1`)
          setPlaceData(getPlace.data)

          const getPosition = await publicRequest.get(`/results/resultChart?question_order=13&affiliate=${affiliation}&part=part1`)
          setPositionData(getPosition.data)

          const getSalary = await publicRequest.get(`/results/resultChart?question_order=15&affiliate=${affiliation}&part=part1`)
          setSalaryData(getSalary.data)

          const getYears = await publicRequest.get(`/results/resultChart?question_order=16&affiliate=${affiliation}&part=part1`)
          setYearsData(getYears.data)

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

          <Box sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Number of Children</Typography>
            <PieChartResults data={noofchildData} />
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Age Range of Children</Typography>
            <BarChartResults data={ageofchildData} />
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Highest Educational Attainment</Typography>
            <PieChartResults data={educationData} />
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Employment Status of Spouse</Typography>
            <PieChartResults data={spouseData} />
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Rank/ Position Title</Typography>
            <BarChartResults data={positionData} />
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Monthly Salary Bracket</Typography>
            <BarChartResults data={salaryData} />
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Place of Assignment</Typography>
            <BarChartResults data={placeData} />
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', height: '600px', width: '100%', boxShadow:3, justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h6" fontWeight={700}>Accumulated Number of Years in Government Service</Typography>
            <PieChartResults data={yearsData} />
          </Box>


          <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 2</Typography>
          <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>

          <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2', width:'100%'}}>
          <Typography variant="h6" fontWeight={700}  >Personal Experience</Typography>
          <PersonalExperienceTable/>

          <Typography variant="h6" fontWeight={700}  >Beliefs, Opinions and Thoughts</Typography>
            <BeliefsTable /> 
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', gap:1, py:2, boxShadow:3, alignItems:'center', backgroundColor:'#E5E4E2', width:'100%'}}>
            <Typography variant="h6" fontWeight={700}  >PART II A</Typography>
            <Part3Number1 />
            <Part3Number2 />
            <Part3Number3 />
            <Part3Number4 />
            <Part3Number5 />
            <Part3Number6 />
            <Part3Number7 />
            <Part3Number8 />
            <Part3Number9 />
            <Part3Number10 />
            <Part3Number11 />
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', gap:1, py:2, boxShadow:3, alignItems:'center', backgroundColor:'#E5E4E2', width:'100%'}}>
            <Typography variant="h6" fontWeight={700}  >PART II B</Typography>
            <Part4Number1 />

          </Box>

        </Box>

        <Box sx={{ display:'flex', width:'100%', height:'100%', justifyContent:'center', flexDirection:'column', gap: 2 }}>

        

        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard