import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';
import { useSelector } from 'react-redux'

const Part3Number4 = () => {

    const {admin} = useSelector((state) => state.admin)
    const {affiliation, superAdmin} = admin
    const no_underscore_affiliation = affiliation.replace(/_/g, " ")
    const getCategory = affiliation.split("_")[1]

    const [table19, setTable19] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTables = async () => {
            try {
                const getTable19 = await publicRequest.get(`/results/resultChart?question_order=4&affiliate=${affiliation}&part=part3`)
                const sortData19 = getTable19.data.sort((a, b) => {
                    const choices = ['Owned', 'Rented', 'Not Applicable'];
                    return choices.indexOf(b.name) - choices.indexOf(a.name);
                  });
                setTable19(sortData19)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getTables()
    }, [setTable19])


    return (

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth:650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Questions</TableCell>
                                <TableCell>Owned</TableCell>
                                <TableCell>Rented</TableCell>
                                <TableCell>Not Applicable</TableCell>
                                
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
                                    <TableCell>4) Our house is</TableCell>
                                {table19.map((item, index) =>{
                                    return(
                                        <TableCell key={index} >{item.count}</TableCell>

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

export default Part3Number4;