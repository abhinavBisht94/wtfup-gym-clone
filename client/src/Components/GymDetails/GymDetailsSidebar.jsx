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
  Select,
} from '@chakra-ui/react';

export const GymDetailsSidebar = () => {
  const optionStyle = { background: '#0d0d0d' };

  const normalText = { fontSize: 'xl', color: 'white' };

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <Text fontSize="4xl" color="white">
        Filters
      </Text>

      <Text sx={normalText}>Location</Text>
      <InputGroup>
        <InputLeftAddon
          pointerEvents="none"
          bg="#0d0d0d"
          border="2px solid gray"
          children={
            <Image
              src="https://cdn-icons-png.flaticon.com/512/751/751381.png"
              alt="search"
              w="2rem"
            />
          }
        />
        <Input
          type="text"
          placeholder="Enter Location"
          fontSize="xl"
          border="2px solid gray"
          borderLeft="none"
          color="white"
        />
      </InputGroup>

      <Text sx={normalText}>Price</Text>
      <Box display="flex" justifyContent="space-between" gap="1rem">
        <Input
          type="number"
          placeholder="Min"
          fontSize="xl"
          border="2px solid gray"
          color="white"
        />
        <Input
          type="number"
          placeholder="Max"
          fontSize="xl"
          border="2px solid gray"
          color="white"
        />
      </Box>

      <Text sx={normalText}>Cities</Text>
      <Select size="lg" color="white" bg="#0d0d0d">
        <option style={optionStyle} value="new delhi">
          New Delhi
        </option>
        <option style={optionStyle} value="ghaziabad">
          Ghaziabad
        </option>
        <option style={optionStyle} value="greater noida">
          Greater Noida
        </option>
        <option style={optionStyle} value="noida">
          Noida
        </option>
        <option style={optionStyle} value="delhi">
          Delhi
        </option>
      </Select>
    </Box>
  );
};
