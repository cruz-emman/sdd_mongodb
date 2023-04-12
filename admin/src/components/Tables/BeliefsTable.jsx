import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tab, Box } from '@mui/material';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';

const BeliefsTable = () => {

    const {affiliation, superAdmin} = admin
    const no_underscore_affiliation = affiliation.replace(/_/g, " ")
    const getCategory = affiliation.split("_")[1]

    const [table5, setTable5] = useState()
    const [table6, setTable6] = useState()
    const [table7, setTable7] = useState()
    const [table8, setTable8] = useState()
    const [table9, setTable9] = useState()
    const [table10, setTable10] = useState()
    const [table11, setTable11] = useState()
    const [table12, setTable12] = useState()
    const [table13, setTable13] = useState()
    const [table14, setTable14] = useState()
    const [table15, setTable15] = useState()

    const [loading, setLoading] = useState(true)
  useEffect(() =>{
    const getTables = async () =>{
        try {
            const getTable5 = await publicRequest.get(`/results/resultChart?question_order=5&affiliate=${affiliation}&part=part2`);
            const sortData5 = getTable5.data.sort((a, b) => {
            const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
            return choices.indexOf(b.name) - choices.indexOf(a.name);
          });
          setTable5(sortData5);

            const getTable6 = await publicRequest.get(`/results/resultChart?question_order=6&affiliate=${affiliation}&part=part2`);
            const sortData6 = getTable6.data.sort((a, b) => {
            const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
            return choices.indexOf(b.name) - choices.indexOf(a.name);
          });
          setTable6(sortData6);

            const getTable7 = await publicRequest.get(`/results/resultChart?question_order=7&affiliate=${affiliation}&part=part2`);
            const sortData7 = getTable7.data.sort((a, b) => {
            const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
            return choices.indexOf(b.name) - choices.indexOf(a.name);
          });
          setTable7(sortData7);

            const getTable8 = await publicRequest.get(`/results/resultChart?question_order=8&affiliate=${affiliation}&part=part2`);
            const sortData8 = getTable8.data.sort((a, b) => {
            const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
            return choices.indexOf(b.name) - choices.indexOf(a.name);
          });
          setTable8(sortData8);

            const getTable9 = await publicRequest.get(`/results/resultChart?question_order=9&affiliate=${affiliation}&part=part2`);
            const sortData9 = getTable9.data.sort((a, b) => {
            const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
            return choices.indexOf(b.name) - choices.indexOf(a.name);
          });
            setTable9(sortData9);

            const getTable10 = await publicRequest.get(`/results/resultChart?question_order=10&affiliate=${affiliation}&part=part2`);
            const sortData10 = getTable10.data.sort((a, b) => {
            const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
            return choices.indexOf(b.name) - choices.indexOf(a.name);
          });
          setTable10(sortData10);

          const getTable11 = await publicRequest.get(`/results/resultChart?question_order=11&affiliate=${affiliation}&part=part2`);
          const sortData11 = getTable11.data.sort((a, b) => {
          const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
          return choices.indexOf(b.name) - choices.indexOf(a.name);
        });
        setTable11(sortData11);

        const getTable12 = await publicRequest.get(`/results/resultChart?question_order=12&affiliate=${affiliation}&part=part2`);
        const sortData12 = getTable12.data.sort((a, b) => {
        const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
        return choices.indexOf(b.name) - choices.indexOf(a.name);
      });
      setTable12(sortData12);

        const getTable13 = await publicRequest.get(`/results/resultChart?question_order=13&affiliate=${affiliation}&part=part2`);
        const sortData13 = getTable13.data.sort((a, b) => {
        const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
        return choices.indexOf(b.name) - choices.indexOf(a.name);
        });
        setTable13(sortData13);

        const getTable14 = await publicRequest.get(`/results/resultChart?question_order=14&affiliate=${affiliation}&part=part2`);
        const sortData14 = getTable14.data.sort((a, b) => {
        const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
        return choices.indexOf(b.name) - choices.indexOf(a.name);
    });
        setTable14(sortData14);

        const getTable15 = await publicRequest.get(`/results/resultChart?question_order=15&affiliate=${affiliation}&part=part2`);
        const sortData15 = getTable15.data.sort((a, b) => {
        const choices = ['5 Strongly Agree', '4 Agree', '3 Neutral', '2 Disagree', '1 Strongly Disagree'];
        return choices.indexOf(b.name) - choices.indexOf(a.name);
      });
      setTable15(sortData15);
            
            setLoading(false)
        } catch (error) {
            
        }
    }
    getTables()
  },[setTable5])


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
                <TableCell>{table5[0]?.question}</TableCell>
            {table5 ? (
                table5.map((item, index) => {
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
                <TableCell>{table6[0]?.question}</TableCell>
            {table6 ? (
                table6.map((item, index) => {
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
                <TableCell>{table7[0]?.question}</TableCell>
            {table7 ? (
                table7.map((item, index) => {
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
                <TableCell>{table8[0]?.question}</TableCell>
            {table8 ? (
                table8.map((item, index) => {
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
                <TableCell>{table9[0]?.question}</TableCell>
            {table9 ? (
                table9.map((item, index) => {
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
                <TableCell>{table10[0]?.question}</TableCell>
            {table10 ? (
                table10.map((item, index) => {
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
                <TableCell>{table11[0]?.question}</TableCell>
            {table11 ? (
                table11.map((item, index) => {
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
                <TableCell>{table12[0]?.question}</TableCell>
            {table12 ? (
                table12.map((item, index) => {
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
                <TableCell>{table13[0]?.question}</TableCell>
            {table13 ? (
                table13.map((item, index) => {
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
                <TableCell>{table14[0]?.question}</TableCell>
            {table14 ? (
                table14.map((item, index) => {
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
                <TableCell>{table15[0]?.question}</TableCell>
            {table15 ? (
                table15.map((item, index) => {
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

export default BeliefsTable;