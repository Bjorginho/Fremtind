import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import InsuranceInfo from '../components/Insurance';
import { UserContext } from '../context/UserContext';
import {useNavigate} from 'react-router-dom'; 

const HomePage = () =>{
  const user = useContext(UserContext)
  const { firstName, lastName } = user;
  const navigate = useNavigate();

  const handlePageChange = () => {
    // funket ikke med <Link />
    navigate('/oversikt')
  }

  return (
    <>
      <Box sx={{ display: "flex", height: "50vh" }}>
        <Box
          sx={{
            m: "auto",
            width: "85%",
            minHeight: "fit-content",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography variant="h4">Reiseforsikring</Typography>
            <Typography variant="h6" sx={{ pt: "5%" }}>
              {firstName + " " + lastName}
            </Typography>
          </Box>
          <InsuranceInfo changePage={handlePageChange} />
        </Box>
      </Box>
      <Box
        sx={{
          // display: "flex",
          // height: "50vh",
          opacity: "0.7",
          justifyContent: "center",
        }}
      >
        <img src="images/train.jpg" alt="train-img" />
      </Box>
    </>
  );
}

export default HomePage;