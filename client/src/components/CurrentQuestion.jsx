import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSingleQuestion } from '../redux/apiCalls'
import { publicRequest } from '../utils/publicRequest'
import './index.css'
const CurrentQuestion = ({id, category, part, handleChange,handleTextFieldChange}) => {

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
    if (choice.toggle === 'Yes') {
      setOpenChoiceId(choice.question_choices);
    } else {
      setOpenChoiceId(null);
    }
  };

    
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
      <Grid container spacing={2}  justifyContent="center" alignItems="center" mx={4} p={4} sx={{width: '100%',  height: '100%'}}>
        {currentChoices.map((choice, index) => (
          <Grid item xs={getGridQuestion} key={index} >
            {getCurrentQuestionType === 'single'?                       (
              <>
               <label className="toggle-button" key={choice.id} onClick={() => handleClick(choice)}>
                <input className="toggle-button__state" type="radio" name="choice" value={choice.question_choices} onChange={handleChange} />
                <span className="toggle-button__text">{choice.question_choices}</span>
                {openChoiceId === choice.question_choices && choice.toggle === 'Yes' && <TextField id="outlined-basic" fullWidth name="others" onChange={handleTextFieldChange}  mt={2} size='small' required label="Specify" variant="standard" />}
              </label>
                

              </>
            ):(
              <>
                <label className="toggle-button" key={choice.id} onClick={() => handleClick(choice)}>
                  <input className="toggle-button__state" type="checkbox" name="choice" value={choice.question_choices} onChange={handleChange}/>
                  <span className="toggle-button__text">{choice.question_choices}</span>
                  {openChoiceId === choice.question_choices && choice.toggle === 'Yes' && <TextField id="outlined-basic" fullWidth name="others" onChange={handleTextFieldChange} mt={2} size='small' label="Specify" variant="standard" />}
                  
                </label>
              </>
            )}
            
 
          
          </Grid>
        ))}
        
      </Grid>
    </Box>
    )}
    </>

  )
}

export default CurrentQuestion
