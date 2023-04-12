import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tab, Box } from '@mui/material';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';
import { useSelector } from 'react-redux'


const PersonalExperienceTable = () => {

  const {admin} = useSelector((state) => state.admin)
  const {affiliation, superAdmin} = admin

  
  const no_underscore_affiliation = affiliation.replace(/_/g, " ")
  const getCategory = affiliation.split("_")[1]

    const [table1, setTable1] = useState()
    const [table2, setTable2] = useState()
    const [table3, setTable3] = useState()
    const [table4, setTable4] = useState()

    const [loading, setLoading] = useState(true)
  useEffect(() =>{
    const getTables = async () =>{
        try {
          
          const getTable1 = await publicRequest.get(`/results/resultChart?question_order=1&affiliate=${affiliation}&part=part2`);
          const sortData1 = getTable1.data.sort((a, b) => {
            const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
            return choices.indexOf(b.name) - choices.indexOf(a.name);
          });
          setTable1(sortData1);

          const getTable2 = await publicRequest.get(`/results/resultChart?question_order=1&affiliate=${affiliation}&part=part2`);
          const sortData2 = getTable2.data.sort((a, b) => {
          const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
          return choices.indexOf(b.name) - choices.indexOf(a.name);
          });
          setTable2(sortData2);

          const getTable3 = await publicRequest.get(`/results/resultChart?question_order=1&affiliate=${affiliation}&part=part2`);
          const sortData3 = getTable3.data.sort((a, b) => {
            const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
            return choices.indexOf(b.name) - choices.indexOf(a.name);
          });
          setTable3(sortData3);

          const getTable4 = await publicRequest.get(`/results/resultChart?question_order=1&affiliate=${affiliation}&part=part2`);
          const sortData4 = getTable4.data.sort((a, b) => {
          const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
          return choices.indexOf(b.name) - choices.indexOf(a.name);
          });
          setTable4(sortData4);
            
            setLoading(false)
        } catch (error) {
            
        }
    }
    getTables()
  },[setTable1])


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell align="right">5(SA)</TableCell>
            <TableCell align="right">4(A)</TableCell>
            <TableCell align="right">3(N)</TableCell>
            <TableCell align="right">2(D)</TableCell>
            <TableCell align="right">1(SD)</TableCell>
          </TableRow>
        
        </TableHead>
        {loading ? (
           <BeatLoader 
           color="#36d7b7" 
           loading={loading}
           size={50}
           aria-label="Loading Spinner"
           data-testid="loader"
         />
        ):(
          <TableBody>
            <TableRow>
                <TableCell>I experienced some issues being a woman/man</TableCell>
                
            {table1 ? (
                table1.map((item, index) => {
                return (
                    <TableCell component="th" scope="row" align="right">
                        {item.count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>
              
              <TableRow>
                <TableCell>My domestic responsibilities affect my work in the office</TableCell>
            {table2 ? (
                table2.map((item, index) => {
                return (
                    <TableCell component="th" scope="row" align="right">
                        {item.choice_count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>

              <TableRow>
                <TableCell>I can feel the support of my family to achieve my dreams in life</TableCell>
            {table3 ? (
                table3.map((item, index) => {
                return (
                    <TableCell component="th" scope="row" align="right">
                        {item.choice_count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>

              <TableRow>
                <TableCell>I am fully aware of my rights as a person</TableCell>
            {table4 ? (
                table4.map((item, index) => {
                return (
                    <TableCell component="th" scope="row" align="right">
                        {item.choice_count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>



        </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}

export default PersonalExperienceTable;