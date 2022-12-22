import { Box, Typography } from '@mui/material';
import React from 'react'
import { api } from '../../features/api';

const Home = () => {
    const { data : boats }= api.useGetBoatsQuery();
return(
    <Box display="flex" flexDirection="column" width="100%">
        <Typography  sx={{width : "100%",backgroundColor : "black" , color : "white"}}>One Piece </Typography>
        <Box>
            {boats?.map((boat, index) => (<Typography>{boat.french_name}</Typography>))}
        </Box>
    </Box>
)
}
export default Home;