import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Radio, TextField, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSingleQuestion } from '../redux/apiCalls'
import { publicRequest } from '../utils/publicRequest'
import './index.css'

const Part4Question = ({id, category, part,handleChange,handleTextFieldChange, setIsChange}) => {

  const [currentQuestion, setCurrentQuestion] = useState({})
  const [currentChoices, setCurrentChoices] = useState([])
  const [getCurrentQuestionType, setCurrentQuestionType] = useState("")
  const [getGridQuestion, setGridQuestion] = useState()


  const [loading, setLoading] = useState(true)
  
  useEffect(() =>{
      setLoading(true)
      const getCurrentQuestion = async () =>{
        try {
          const res = await publicRequest.get(`/${category}/${category}${part}/questiontype/${id}`)
          let type = res.data.type.toLowerCase()
          setCurrentQuestionType(type)

          const currentChoice = await publicRequest.get(`${category}/listOfChoices?name=${res.data.question}&part=${category}questionpart${part}`)
          console.log(currentChoice.data)
          let currentColumn = currentChoice.data.length
          let column = 1

          if(currentColumn <=6){
            column = 12
          } else if(currentColumn>=7 && currentColumn <=16){
            column = 6
          }else if(currentColumn > 17){
            column = 3
          }

          
          setGridQuestion(column)
          setCurrentChoices(currentChoice.data)
          setCurrentQuestion(res.data)
          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)

        }
      }

      getCurrentQuestion()
  },[id, category, part])

  //Handle Click State


  const [openChoiceId, setOpenChoiceId] = useState(null);

  const handleClick = (choice) => {
    console.log(choice)
    if (choice.toggle === 'Yes') {
      setOpenChoiceId(choice.question_choices);
    } else {
      setOpenChoiceId(null);
    }
  };

  const [open,setOpen] = useState(false)
  const openRadioChange = (event) => {
    setOpen(true)
    setIsChange(false)

  };

  const closeRadio = (e) =>{

    setIsChange(true)

    setOpen(false)
  }

  return (
    <>
    {loading ? (
      <Typography>Loading</Typography>
    ): (
    <Box
    sx={{display:'flex', alignItems:'center', flexDirection:'column',   }}
    >
      <Typography fontWeight={700} variant="h6">Question # {id}  </Typography>
      <Typography fontWeight={700} textAlign="center" variant="h5">{currentQuestion && currentQuestion.question}</Typography>
    
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:3, marginTop:5, flexDirection:'column'}}>
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap: 4}}>

            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap: 2}}>
                <input type="radio" onChange={openRadioChange} value="open" name="rad" id="rad" style={{transform: 'scale(2)'}} />
                <label htmlFor="rad">Yes</label>
            </Box>

            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap: 2}}>
                <input type="radio" onChange={closeRadio}  value="close" name="rad" id="rad2" style={{transform: 'scale(2)'}} />
                <label htmlFor="rad2">No</label>
            </Box>
    
          </Box>
                
            {open  && (
            <Grid container spacing={2}  justifyContent="center" alignItems="center" mx={4} p={4} sx={{width: '100%',  height: '100%'}}>
                {currentChoices.map((choice, index) =>(
                    <Grid item xs={6} key={index}>
                     <label className="toggle-button" key={choice.id} onClick={() => handleClick(choice)}>
                     <input className="toggle-button__state" type="checkbox" name="choice" value={choice.question_choices} onChange={handleChange}/>
                     <span className="toggle-button__text">{choice.question_choices}</span>
                     {openChoiceId === choice.question_choices && choice.toggle === 'Yes' && <TextField id="outlined-basic" fullWidth name="others" onChange={handleTextFieldChange} mt={2} size='small' label="Specify" variant="standard" />}
                     
                   </label>
                    </Grid>
                ))}
                </Grid>
                )}
            
        </Box>
        
    </Box>
    )}
    </>

  )
}

export default Part4Question