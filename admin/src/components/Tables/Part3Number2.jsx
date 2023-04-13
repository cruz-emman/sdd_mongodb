import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';
import { useSelector } from 'react-redux'

const Part3Number2 = () => {

    const {admin} = useSelector((state) => state.admin)
    const {affiliation, superAdmin} = admin
    const no_underscore_affiliation = affiliation.replace(/_/g, " ")
    const getCategory = affiliation.split("_")[1]

    const [table17, setTable17] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTables = async () => {
            try {
                const getTable17 = await publicRequest.get(`/results/resultChart?question_order=2&affiliate=${affiliation}&part=part3`)
                const sortData17 = getTable17.data.sort((a, b) => {
                    const choices = ['Employment', 'Investments', 'Rentals/ Leases', 'Business', 'Others'];
                    return choices.indexOf(b.name) - choices.indexOf(a.name);
                  });
                setTable17(sortData17)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getTables()
    }, [setTable17])


    return (

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth:650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Questions</TableCell>
                                <TableCell>Employment</TableCell>
                                <TableCell>Investments</TableCell>
                                <TableCell>Rentals/Leases</TableCell>
                                <TableCell>Business</TableCell>
                                <TableCell>Others</TableCell>
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
                                    <TableCell>2) My source/s of income is/are</TableCell>
                                {table17.map((item, index) =>{
                                    return(
                                        <TableCell key = {index} >{item.count}</TableCell>

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

export default Part3Number2;