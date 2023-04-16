import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';

const Part3Number11 = () => {

    const location = useLocation()
    const category = location.pathname.split("/")[1].split("Dashboard")[0]

    const {admin} = useSelector((state) => state.admin)
    const {affiliation, superAdmin} = admin
    const no_underscore_affiliation = affiliation.replace(/_/g, " ")
    const getCategory = affiliation.split("_")[1]

    const [table26, setTable26] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTables = async () => {
            try {
                if(superAdmin === true){
                    const getTable26 = await publicRequest.get(`/results/resultChartSuperAdmin?question_order=11&category=${category}&part=part3`);
                    const choices26 = ['Self', 'Spouse/ Partner', 'Relatives, house helper etc.', 'Shared by family members'];
                    const sortData26 = choices26.map(choice => {
                    const data = getTable26.data.find(item => item.name.includes(choice));
                    return {
                        name: choice,
                        count: data ? data.count : 0,
                        };
                    });
                    setTable26(sortData26);
                    setLoading(false) 

                }else if(superAdmin === false){
                    const getTable26 = await publicRequest.get(`/results/resultChart?question_order=11&affiliate=${affiliation}&part=part3`);
                    const choices26 = ['Self', 'Spouse/ Partner', 'Relatives, house helper etc.', 'Shared by family members'];
                    const sortData26 = choices26.map(choice => {
                    const data = getTable26.data.find(item => item.name.includes(choice));
                    return {
                        name: choice,
                        count: data ? data.count : 0,
                        };
                    });
                    setTable26(sortData26);
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getTables()
    }, [setTable26])


    return (

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth:650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Questions</TableCell>
                                <TableCell>Self</TableCell>
                                <TableCell>Spouse/ Partner</TableCell>
                                <TableCell>Relatives, house helper etc.</TableCell>
                                <TableCell>Shared by family members</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow>

                        {loading ? (
                            <BeatLoader 
                            color="#36d7b7" 
                            loading={loading}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            />
                            ):(
                                <>
                                    <TableCell>11) If there are meetings in the barangay or subdivision, most of the time, the person attending is/are</TableCell>
                                {table26.map((item, index) =>{
                                    return(
                                        <TableCell key={index}>{item.count}</TableCell>

                                    )
                                })}
                                </>
                            
                        )}
                        </TableRow>

                     </TableBody>

                    </Table>
                </TableContainer>

    );
}

export default Part3Number11;