import React from 'react';

import { Box, Image, Button } from '@chakra-ui/react';
import { NavBox } from '../Components/Navbar/NavBox';

export const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      textAlign="center"
      bg="#0d0d0d"
      color="white"
    >
      {/* https://i.ibb.co/Xbs0nT9/wtf-gym-white.jpg */}

      <Image
        src="https://i.ibb.co/9HDXLx8/wtf-gym-white.png"
        alt="WTF Logo"
        w="6rem"
        cursor="pointer"
      />

      <Box display="flex" justifyContent="space-evenly">
        <NavBox>Fitness</NavBox>
        <NavBox>Nutrient</NavBox>
        <NavBox>Gyms</NavBox>
        <NavBox>Become WTF Partner</NavBox>
        <NavBox>About Us</NavBox>
        <NavBox bg="red">Login</NavBox>
      </Box>
    </Box>
  );
};
