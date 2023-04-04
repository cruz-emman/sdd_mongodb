import React from 'react'
import { Navbar } from '../components'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Landing from '../assets/landing.jpg'
import { useSelector } from 'react-redux'

const Homepage = () => {

  const {currentUser} = useSelector((state) => state.auth)


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
        
        <Box sx={{zIndex:2, display:'flex', alignItems:'center', height: '50%', width: '80%', backgroundColor: 'white', borderRadius: '50px', flexDirection:'column', p:4}}>
          <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', gap: 3}}>
              <Typography variant="h4" sx={{fontWeight: '700'}} color="text.secondary">Gender And Development Survey Questionnaire</  Typography>
              <Typography variant="h5" color="text.disabled" sx={{textTransform: 'uppercase'}}>(PPSC {currentUser.user_category})</Typography>
               <Typography variant="h5" sx={{fontWeight: 700}} >Introduction: </Typography>
<Typography>This Survey is being conducted in line with implemntation of the General and Development (GAD) programs of the College. Your participation  in this survey will be helpful in preparint the appropriate GAD programs and activties. By Accomplishing the following survey, you are authorizing the PPSC to collect the process your information based on the aforementioned pur  pose of the survey. Rest assured that your information and response will be kept confidential in accordance with the Data Privacy Act of 2012</Typography> 
<Link to="part1survey/1">
            <Button variant="contained" size="large" color="secondary">Start Survey</Button>
          </Link>
          </Box>
            
         
     
        </Box>

       
      </Box>
      
    </Box>
  )
}

export default Homepage

{/* <Typography fontWeight={700} >Introduction: </Typography>
<Typography>This Surve is being conducted in line with implemntation of the General and Development (GAD) programs of the College. Your participation  in this survey will be helpful in preparint the appropriate GAD programs and activties. By Accomplishing the following survey, you are authorizing the PPSC to collect the process your information based on the aforementioned pur  pose of the survey. Rest assured that your information and response will be kept confidential in accordance with the Data Privacy Act of 2012</Typography> */}

// <Box Box sx={{display:'flex', height:'100%', width: '100%', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:4, lineHeight:'10px'}}>
//               <Typography variant="h4" color="text.secondary">Gender And Development Survey Questionnaire</Typography>
//               <Typography variant="h5" color="text.disabled">(PPSC Faculty)</Typography>
//               <Typography fontWeight={700} >Introduction: </Typography>
//               <Typography>This Surve is being conducted in line with implemntation of the General and Development (GAD) programs of the College. Your participation  in this    survey will be helpful in preparint the appropriate GAD programs and activties. 
//                 <br/>
//                  By Accomplishing the following survey, you are authorizing the PPSC to collect the process your information based on the aforementioned pur  pose of the survey. Rest assured that your information and response will be kept confidential in accordance with the Data Privacy Act of 2012</Typography>
//             </Box>
//         </Box>
//         <Box sx={{width: '100%', height: 800, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', p:4, boxShadow:3,backgroundColor: 'white'}}>
//             <Box sx={{display:'flex', height:'100%', width: '100%', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:4, lineHeight:'10px'}}>
//               <Typography variant="h4" >Hi!  ( Number)</Typography>
//               <Link to="part1survey/1">
//                 <Button variant="outlined" size="large" color="secondary">Start Survey</Button>