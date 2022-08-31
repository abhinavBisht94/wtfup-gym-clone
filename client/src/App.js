import React from 'react';

//~ importing Chakra
import { ChakraProvider, Box, theme, Image } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

//~ importing Pages
import { Navbar } from './pages/Navbar';
import { Footer } from './pages/Footer';
import { GymDetails } from './pages/GymDetails';

function App() {
  return (
    <ChakraProvider>
      <Box bg="#0d0d0d">
        <Navbar />
        <Image
          src="https://i.ibb.co/T00qkQC/nav-image.png"
          alt="nav image"
          w="100%"
        />

        <GymDetails />

        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
