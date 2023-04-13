import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tab, Box } from '@mui/material';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';
import { useSelector } from 'react-redux'

const BeliefsTable = () => {


    const {admin} = useSelector((state) => state.admin)
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
                <TableCell>It is important for me to know the different gender</TableCell>
            {table5 ? (
                table5.map((item, index) => {
                return (
                    <TableCell key={index} component="th" scope="row" align="right">
                        {item.count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell key={index} colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>
              
              <TableRow>
                <TableCell>I believe wthat gender has nothing to do with what people do everyday</TableCell>
            {table6 ? (
                table6.map((item, index) => {
                return (
                    <TableCell key={index} component="th" scope="row" align="right">
                        {item.count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell key={index} colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>
                    
              <TableRow>
                <TableCell>Men and women are treated equally in our society</TableCell>
            {table7 ? (
                table7.map((item, index) => {
                return (
                    <TableCell key={index} component="th" scope="row" align="right">
                        {item.count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell key={index} colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>

              <TableRow>
                <TableCell>Our culture does not prescribes/assigns certain responsibilites specifically for women and men</TableCell>
            {table8 ? (
                table8.map((item, index) => {
                return (
                    <TableCell key={index} component="th" scope="row" align="right">
                        {item.count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell key={index} colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>

              <TableRow>
                <TableCell>It is acceeptable for woman to work provided that they will not neglect their families</TableCell>
            {table9 ? (
                table9.map((item, index) => {
                return (
                    <TableCell key={index} component="th" scope="row" align="right">
                        {item.count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell key={index} colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>

              <TableRow>
                <TableCell>Women must not be disrespected because of their gestures or manner of dressing   </TableCell>
            {table10 ? (
                table10.map((item, index) => {
                return (
                    <TableCell key={index} component="th" scope="row" align="right">
                        {item.count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell key={index} colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>

              <TableRow>
                <TableCell>Fathers should be a good provider for their families</TableCell>
            {table11 ? (
                table11.map((item, index) => {
                return (
                    <TableCell key={index} component="th" scope="row" align="right">
                        {item.count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell key={index} colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>

              <TableRow>
                <TableCell>Women should have equal access to education and employment to support their families</TableCell>
            {table12 ? (
                table12.map((item, index) => {
                return (
                    <TableCell key={index} component="th" scope="row" align="right">
                        {item.count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell key={index} colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>

              <TableRow>
                <TableCell>Household chore is a responsibility of all thee members of the family</TableCell>
            {table13 ? (
                table13.map((item, index) => {
                return (
                    <TableCell key={index} component="th" scope="row" align="right">
                        {item.count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell key={index} colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>

              <TableRow>
                <TableCell>Being a woman/man is not a major issue/concern for me everyday</TableCell>
            {table14 ? (
                table14.map((item, index) => {
                return (
                    <TableCell key={index} component="th" scope="row" align="right">
                        {item.count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell key={index} colSpan={6} align="center">
                    {loading ? 'Loading...' : 'No data available'}
                </TableCell>
                </Box>
            )}
              </TableRow>

              <TableRow>
                <TableCell>Our brothers and sisterss coming from the LGBTQIA2S+ community should be fully accepted by the society</TableCell>
            {table15 ? (
                table15.map((item, index) => {
                return (
                    <TableCell key={index} component="th" scope="row" align="right">
                        {item.count}
                    </TableCell>
                  
                );
                })
            ) : (
                <Box>
                <TableCell key={index} colSpan={6} align="center">
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