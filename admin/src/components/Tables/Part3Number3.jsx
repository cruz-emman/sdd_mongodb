import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';
import { useSelector } from 'react-redux'

const Part3Number3 = () => {

    const {admin} = useSelector((state) => state.admin)
    const {affiliation, superAdmin} = admin
    const no_underscore_affiliation = affiliation.replace(/_/g, " ")
    const getCategory = affiliation.split("_")[1]

    const [table18, setTable18] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTables = async () => {
            try {
                const getTable18 = await publicRequest.get(`/results/resultChart?question_order=3&affiliate=${affiliation}&part=part3`)
                const sortData18 = getTable18.data.sort((a, b) => {
                    const choices = ['Yes', 'No'];
                    return choices.indexOf(b.name) - choices.indexOf(a.name);
                  });
                setTable18(sortData18)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getTables()
    }, [setTable18])


    return (

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth:650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Questions</TableCell>
                                <TableCell>Yes</TableCell>
                                <TableCell>No</TableCell>
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
                                    <TableCell>3) My salary income is enough to support the needs of the family</TableCell>
                                {table18.map((item) =>{
                                    return(
                                        <TableCell>{item.count}</TableCell>

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

export default Part3Number3;