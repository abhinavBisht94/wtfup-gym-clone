import React from 'react';

import { Box, Image, Button, ButtonGroup } from '@chakra-ui/react';

export const NavBox = ({ bg = '#0d0d0d', children }) => {
  const hover = { color: 'white' };
  return (
    <Button m="1.5rem 1rem 0rem 0rem" color="gray" _hover={hover} bg={bg}>
      {children}
    </Button>
  );
};
