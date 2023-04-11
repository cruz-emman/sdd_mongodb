import { Box, Typography, CircularProgress, InputLabel, MenuItem , FormControl , Select  } from '@mui/material'
import React,{ useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import RespondentsChart from '../components/RespondentsChart'
import { useSelector } from 'react-redux'
import {publicRequest} from '../utils/publicRequest'
import DataTable from '../components/DataTable'

const Home = () => {

  const {admin} = useSelector((state) => state.admin)
  const {affiliation, superAdmin} = admin

  
  const no_underscore_affiliation = affiliation.replace(/_/g, " ")
  const getCategory = affiliation.split("_")[1]



  const [getTotal, setGetTotal] = useState()
  const [getRecentSurvey, setRecentSurvey] = useState([])
  const [loading, setLoading] = useState(true)

  const [date, setDate] = useState('');

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  useEffect(() =>{

    const getTotal = async () =>{
      setLoading(true)

      try {
        if(superAdmin === true){
          setGetTotal(res.data)

        }else if(superAdmin === false){
          const countData = await publicRequest.get(`/completed/getTotalAffiliation?affiliate=${affiliation}`)
          const surveys = await publicRequest.get(`/completed/getRecentSurvey?affiliate=${affiliation}`)
          console.log(surveys.data)
          
          setRecentSurvey(surveys.data)
          setGetTotal(countData.data)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
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

          {superAdmin ? (
            <>
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
            </>
          ):(
              <Box sx={{display:'flex', p:4, alignItems:'center',flexDirection:'column',height: 1, width: '25%',boxShadow:3, backgroundColor: "#1e88e5"}}>
              <Typography variant="subtitle2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700', borderBottom: 2,}}>{no_underscore_affiliation}</Typography>
              <Box sx={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', width: '100%',}} >
              <Typography variant="h2" color="white" sx={{textTransform: 'uppercase', fontWeight:'700'}}>{getTotal}</Typography>
              </Box>
            </Box>
          )}
            

          

          
        </Box>
        <Box sx={{p:4, height: '95%', width: '100%', display:'flex', flexDirection:'column', gap:1}}>.
          <Box sx={{display:'flex', alignItems:'center'}}>
          <Typography sx={{display:'flex', flex:2}} variant="h5" color="text.disabled" fontWeight={700}>Recent Survey</Typography>
          <FormControl  sx={{display:'flex', flex:1}} >
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={date}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="month">Month</MenuItem>
            <MenuItem value="quarter">Quarter</MenuItem>
            <MenuItem value="year">Year</MenuItem>
          </Select>
        </FormControl>
          </Box>
          {loading ? (
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <CircularProgress />
            </Box>
          ):(
            <DataTable loading={loading} data={getRecentSurvey} />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Home