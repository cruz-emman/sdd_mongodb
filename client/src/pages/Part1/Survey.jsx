    import { Box, Button, LinearProgress, RadioGroup, Typography , FormControlLabel, Radio, FormControl, FormLabel, CircularProgress, Checkbox, FormGroup, Grid } from '@mui/material'
    import React, { useState, useEffect, useContext } from 'react'
    import { useDispatch, useSelector } from 'react-redux';
    import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
    import { Navbar } from '../../components';
    import CurrentQuestion from '../../components/CurrentQuestion';
    import { GetAllQuestion, GetSingleQuestion } from '../../redux/apiCalls';
    import { publicRequest } from '../../utils/publicRequest';

        //pag kumukha ng choices, naka base sa may Primary ID
        //pag kumukha ng question at progress bar, naka base sa Order

        const Survey = () => {
            const dispatch = useDispatch()
            const {id} = useParams()
            const navigate = useNavigate()
            const location = useLocation()
            const getSurveyPart = location.pathname.split('/')[1].split('part')[1].split('survey')[0]
            const [isChange, setIsChange] = useState(false);

            const {currentUser} = useSelector((state) => state.auth)
          
            const {questions,isFetching, isError} = useSelector((state) => state.questions)
            const {user_number, user_category} = currentUser
            const [loading ,setLoading] = useState(true)

            const [currentQuestionID, setCurrentQuestionID] = useState()
        
           const [answer,setAnswer] = useState({
            user_number: user_number,
            user_category: user_category,
            choice: [],
            others: "",
           })

           
            
           const handleChange = (e) => {
            const value = e.target.value;
            const inputType = e.target.type;
          
            let newChoice = answer.choice;
          
            if (inputType === "radio") {
              newChoice = [value];
            } else if (inputType === "checkbox") {
              const isChecked = e.target.checked;
              const choiceIndex = answer.choice.indexOf(value);
              if (isChecked) {
                newChoice = [...answer.choice, value];
              } else {
                newChoice = [
                  ...answer.choice.slice(0, choiceIndex),
                  ...answer.choice.slice(choiceIndex + 1),
                ];
              }
            }
          
            const newAnswer = { ...answer, choice: newChoice };
            setIsChange(true)
            setAnswer(newAnswer);
          };
  
  
            

           const handleTextFieldChange = (e) => {
            const value = e.target.value;
            const name = e.target.name;
            if (name === "choice") {
              const selectedChoice = e.target.value;
              setAnswer((prev) => ({
                ...prev,
                [name]: [...prev[name], selectedChoice],
              }));
            } else {
              setAnswer((prev) => ({
                ...prev,
                [name]: value,
              }));
            }
            setIsChange(true);
          }



            const handleSubmit = async (e) => {
                e.preventDefault();

                try {
                  if (id <= questions.length) {
                    await publicRequest.post(`/results`, answer);
                    
                    const newId = parseInt(id) + 1;
                    if (newId === questions.length + 1) {
                      navigate(`/part2survey/1`);
                    } else {
                      navigate(`/part1survey/${newId}`);
                    }
                  }
                  else{
                    console.log("ERROR!")
                  }
                  setAnswer({
                    user_number: user_number,
                    user_category: user_category,
                    choice: [],
                    others: "",
                  });
                  setIsChange(false);
                  console.log(answer);

                } catch (error) {
                  console.log(answer);

                  console.log(error);

                }
              };

            const handlePrevious = async (e) =>{
                try {
                    if(id > 1){
                        navigate(`/part1survey/${id - 1}`)
                    }
                    setIsChange(false);

                } catch (error) {
                    console.log(error)
                }
            }

            useEffect(() =>{
                GetAllQuestion(user_category, getSurveyPart, dispatch)
            },[])

            useEffect(() =>{
                const currentQuestion = async () =>{
                    setLoading(true)
                    try {
                        const res = await publicRequest.get(`/${user_category}/${user_category}${getSurveyPart}/questiontype/${id}`)
                        const questionID = `id${user_category}questionpart${getSurveyPart}`
                         setAnswer((prev) => ({...prev, question_order: res.data.question_order, part: questionID  }))
                        setLoading(false)
                    } catch (error) {
                        console.log(error)
                    }
                }
                currentQuestion()
            },[id])
            
     

            const totalQuestions = questions.length;
            const progress = ((parseInt(id) - 1) / totalQuestions) * 100;
            
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100vw', maxHeight: '100vh', overflowX: 'hidden' }}>
                    <Navbar />
                    <Box sx={{ display: 'flex', width: '100%', height: 'calc(100vh - 70px)', background: 'linear-gradient(90deg, rgba(0,8,36,1) 0%, rgba(7,7,170,1) 0%, rgba(72,81,138,1) 100%)', justifyContent: 'center' }}>
                    <form style={{display:'flex', alignItems:'center', justifyContent:'center',width: '100%', height:'100%', }} onSubmit={handleSubmit}  >

                    <Box sx={{ height: '90%', alignContent: 'flex-start', backgroundColor: 'white', width: '80%', borderRadius: '50px', flexDirection: 'column', mx: 4,  }}>

                        <Box sx={{ display: 'flex', alignItems: 'center',  justifyContent: 'center', flexDirection: 'column', gap: 2, height: '100%', py: 4 }}>
                        <Typography fontWeight={700 } textAlign="center" variant="subtitle1">Demographic Profile of Respondent and Employment</Typography>

                            <Box sx={{ width: '95%' }}>
                                <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: '20px' }} />
                            </Box>
                        {isFetching ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CircularProgress />
                            </Box>
                        ) : (
                            <Box sx={{height: '100%', display: 'flex',  flexDirection:'column'}}>
                                <CurrentQuestion handleChange={handleChange} handleTextFieldChange={handleTextFieldChange} category={user_category} part={getSurveyPart} id={id} />
                            
                            <Box sx={{ display:'flex', gap:2, justifyContent:'center', alignItems: 'flex-end', marginTop: 'auto' }}>
                                <Button  disabled={!isChange} type="submit" variant="contained">Next</Button>
                            </Box>

                            </Box>
                                
                        )}
                       

                       </Box>
                    </Box>
                    </form>

                 </Box>
                </Box>
            );
        };

        export default Survey
