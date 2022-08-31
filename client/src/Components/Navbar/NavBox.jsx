import React from 'react';

import { Box, Image, Button, ButtonGroup } from '@chakra-ui/react';

export const NavBox = ({ bg = '#0d0d0d', borderBottom = '', children }) => {
  const hover = { color: 'white' };
  return (
    <Button
      m="1.5rem 1rem 0rem 0rem"
      color="gray"
      borderRadius="none"
      _hover={hover}
      bg={bg}
      borderBottom={borderBottom}
    >
      {children}
    </Button>
  );
};
