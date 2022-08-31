import React from 'react';

//~ importing Chakra
import {
  Box,
  Image,
  Button,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/react';

export const GymDetailsSearch = () => {
  return (
    <InputGroup
      w="80%"
      m="2rem auto"
      p="0.5rem"
      border="2px solid white"
      borderRadius="0.5rem"
    >
      <InputLeftAddon
        pointerEvents="none"
        bg="#0d0d0d"
        border="none"
        children={
          <Image
            src="https://cdn-icons-png.flaticon.com/512/751/751381.png"
            alt="search"
            w="2rem"
          />
        }
      />
      <Input
        variant="unstyled"
        type="text"
        placeholder="Search gym name here..."
        borderLeft="none"
        fontSize="xl"
        border="none"
        color="white"
      />

      <InputRightAddon
        pointerEvents="none"
        bg="#920909"
        border="none"
        borderLeftRadius="0.5rem"
        borderRadius="0.5rem"
        children={
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png"
            alt="location"
            w="1.5rem"
          />
        }
      />

      <InputRightAddon pointerEvents="none" bg="#0d0d0d" border="none" />

      <InputRightAddon
        pointerEvents="none"
        bg="#920909"
        color="white"
        border="none"
        borderLeftRadius="0.5rem"
        borderRadius="0.5rem"
        children={<Text>Clear</Text>}
      />
    </InputGroup>
  );
};
