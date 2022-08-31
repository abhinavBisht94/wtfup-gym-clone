import React from 'react';

//~ importing Chakra
import { Box, Image, Text } from '@chakra-ui/react';

export const Footer = () => {
  //* common CSS variables
  const textBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };
  const boldText = {
    fontSize: 'md',
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
  };
  const normalText = {
    fontSize: 'md',
    cursor: 'pointer',
  };
  return (
    <Box>
      {/* //& Top Footer */}
      <Box>
        <Image
          src="https://i.ibb.co/W3hkDNf/wtf-footer-top.png"
          alt="WTF footer details"
          w="100%"
          m="auto"
        />
      </Box>

      {/* //& Bottom Footer */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(4,1fr)"
        gap="4rem"
        p="5rem 10rem"
        color="gray"
        textAlign="center"
      >
        <Box>
          <Image
            src="https://i.ibb.co/9HDXLx8/wtf-gym-white.png"
            alt="WTF Logo"
            w="6rem"
            cursor="pointer"
            m="auto"
          />

          {/* justifyContent="space-around" */}
          <Box display="flex" justifyContent="space-around">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="instagram"
              w="2rem"
              cursor="pointer"
            />
            <Image
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="instagram"
              w="2rem"
              cursor="pointer"
            />
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="instagram"
              w="2rem"
              cursor="pointer"
            />
          </Box>
        </Box>

        <Box sx={textBox}>
          <Text sx={boldText}>Quick links</Text>
          <Text sx={normalText}>About</Text>
          <Text sx={normalText}>FAQs</Text>
          <Text sx={normalText}>Privacy Policy</Text>
          <Text sx={normalText}>WTF in News</Text>
          <Text sx={normalText}>Terms & Conditions</Text>
          <Text sx={normalText}>Refund & Cancellation</Text>
        </Box>

        <Box sx={textBox}>
          <Text sx={boldText}>Explore</Text>
          <Text sx={normalText}>Arenas</Text>
          <Text sx={normalText}>Studios</Text>
          <Text sx={normalText}>Nutrition</Text>
        </Box>

        <Box sx={textBox}>
          <Text sx={boldText}>Contact</Text>

          <Box display="flex" gap="1rem">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/819/819814.png"
              alt="location"
              boxSize="1rem"
              cursor="pointer"
            />
            <Text sx={normalText}>
              Ro: S 1502, Amrapali Silicon city, Sector 76, Noida, Uttar
              Pradesh, India
            </Text>
          </Box>

          <Box display="flex" justifyContent="space-evenly">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/819/819814.png"
              alt="location"
              boxSize="1rem"
              cursor="pointer"
            />
            <Text sx={normalText}>
              Ho: C-86 B, Ground Floor, Sector 8, Noida, Uttar Pradesh, India
            </Text>
          </Box>

          <Box display="flex" justifyContent="space-evenly">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4213/4213179.png"
              alt="phone"
              boxSize="1rem"
              cursor="pointer"
            />
            <Text sx={normalText}>+919090639005</Text>
          </Box>

          <Box display="flex" justifyContent="space-evenly">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/552/552486.png"
              alt="mail"
              boxSize="1rem"
              cursor="pointer"
            />
            <Text sx={normalText}>support@wtfup .me</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
