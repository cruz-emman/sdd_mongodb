import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import AddIcon from '@mui/icons-material/Add';
import BadgeIcon from '@mui/icons-material/Badge';
import Man3Icon from '@mui/icons-material/Man3';
import React from 'react'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { logOut } from '../redux/adminSlice';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify';

const Sidebar = () => {


  const {admin, isFetching, isError, isSuccess} = useSelector((state) => state.admin)
  let techSuperAdmin = admin && admin.techAdmin ? admin.techAdmin : false;
  let techAdminCategory = admin.category_affiliation
 
  

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogoUt = async (e) =>{
    e.preventDefault();
    try {
      dispatch(logOut())
      localStorage.removeItem('persist:root'); // remove admin data from local storage
      toast.info('Logged out successfully!'); // show success toast notification
      navigate('/login'); // redirect to login page
    } catch (error) {
      toast.error('Something went wrong. Please try again.'); 
      console.log(error)// show error toast notification
    }
  }

  return (
    <Box sx={{
      backgroundColor: 'white',
      boxShadow: 3,
      minHeight: '100vh',
      flex:1,
      position: 'relative',
    }}>
        <Box sx={{display:'flex', flexDirection:'column', p:2, alignItems:'center', justifyContent:'center', gap: 4, borderBottom: 1, color: 'gray'}}>
          <Box component="img" src={Logo} sx={{width: 150, height: 150, }}  />
          <Typography sx={{fontWeight: 700}} color="text-secondary">{admin.category_affiliation}</Typography>
        </Box>

        <List 
          dense
           sx={{px:2}}
           subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Users
            </ListSubheader>
          }
        >

          <Link to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>   


          {techAdminCategory === "tech_students" && (
            <Link to="/studentsUsers">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Man3Icon />
                  </ListItemIcon>
                  <ListItemText primary="Students" />
                </ListItemButton>
              </ListItem>
            </Link>
          )}




          {techAdminCategory === "tech_faculty" && (
            <Link to="/facultyUsers">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Faculty" />
              </ListItemButton>
            </ListItem>
          </Link>
          )}

        {techAdminCategory === "tech_employees" && (

            <Link to="/employeesUsers">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BadgeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Employee" />
                </ListItemButton>
              </ListItem> 
            </Link>
          )}
        </List>

      {techSuperAdmin === true && (

          <>
          
        <List 
          dense
           sx={{px:2}}
          
        >


          <Link to="/studentsUsers">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Man3Icon />
                </ListItemIcon>
                <ListItemText primary="Students" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/facultyUsers">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Faculty" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/employeesUsers">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BadgeIcon />
                </ListItemIcon>
                <ListItemText primary="Employee" />
              </ListItemButton>
            </ListItem> 
          </Link>
  
        </List>

        
        <List 
          dense
           sx={{px:2}}
           subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Admin
            </ListSubheader>
          }
        >
          <Link to="/adminUsers">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BadgeIcon />
                </ListItemIcon>
                <ListItemText primary="Admin" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

          </>

      )}
       
      

        <Box sx={{ display:'flex', gap:2, justifyContent:'center', alignItems: 'flex-end', marginTop: 10, mx: 4 }}>
          <Button onClick={handleLogoUt} variant="contained" color="secondary" sx={{width: '100%'}}>Logout</Button>
        </Box>
    </Box>
  )
}

export default Sidebar