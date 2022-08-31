import React from 'react';

//~ importing Chakra
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
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

        <GymDetails />

        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
