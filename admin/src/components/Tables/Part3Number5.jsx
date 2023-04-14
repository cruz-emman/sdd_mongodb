import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';
import { useSelector } from 'react-redux'

const Part3Number5 = () => {

    const {admin} = useSelector((state) => state.admin)
    const {affiliation, superAdmin} = admin
    const no_underscore_affiliation = affiliation.replace(/_/g, " ")
    const getCategory = affiliation.split("_")[1]

    const [table16, setTable16] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTables = async () => {
            try {
                const getTable16 = await publicRequest.get(`/results/resultChart?question_order=5&affiliate=${affiliation}&part=part3`)
                const sortData16 = getTable16.data.sort((a, b) => {
                    const choices = ['Owned', 'Spouse/ Partner', 'Relatives, house helper etc', ' Shared by family members'];
                    return choices.indexOf(b.name) - choices.indexOf(a.name);
                  });
                setTable16(sortData16)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getTables()
    }, [setTable16])


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
                                    <TableCell>5) At home, household chores like cooking, washing clothes, cleaning the house, etc is being done by</TableCell>
                                {table16.map((item, index) =>{
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

export default Part3Number5;