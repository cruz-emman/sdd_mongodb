import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { publicRequest } from '../../utils/publicRequest';
import { useSelector } from 'react-redux'

const Part4Number1 = () => {

    const {admin} = useSelector((state) => state.admin)
    const {affiliation, superAdmin} = admin
    const no_underscore_affiliation = affiliation.replace(/_/g, " ")
    const getCategory = affiliation.split("_")[1]

    const [table16, setTable16] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTables = async () => {
            try {
                const getTable16 = await publicRequest.get(`/results/resultChart?question_order=1&affiliate=${affiliation}&part=part4`)
                const sortData16 = getTable16.data.sort((a, b) => {
                    const choices = ['GAD Orientation', 'Gender Mainstreaming', 'GAD Analysis Tools', 'Gender Mainstreaming Evaluation Framework','Gender Sensitivity Training','GAD Planning and Budgeting','Harmonized Gender and Development Guidelines','None','Others, enumerate'];
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
                                <TableCell>Question</TableCell>
                                <TableCell>GAD Orientation</TableCell>
                                <TableCell>Gender Mainstreaming</TableCell>
                                <TableCell>GAD Analysis Tools</TableCell>
                                <TableCell>Gender Mainstreaming Evaluation Framework</TableCell>
                                <TableCell>Gender Sensitivity Training</TableCell>
                                <TableCell>GAD Planning and Budgeting</TableCell>
                                <TableCell>Harmonized Gender and Development Guidelines</TableCell>
                                <TableCell>Others</TableCell>
                                <TableCell>None</TableCell>
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
                                    <TableCell>1) Have you attended GAD seminars/trainings</TableCell>
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

export default Part4Number1;