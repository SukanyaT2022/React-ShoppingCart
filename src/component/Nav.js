import React from 'react';
import { Box, Link, Text, Badge, Image } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const Nav = ({ counterName, counterName2, counterName3 }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="1px solid grey"
      height="70px"
      backgroundColor="#1f8a70"
    >
      <Text
        flex={1}
        fontSize="35px"
        fontWeight="bold"
        ml={5}
        borderRadius={100}
      >
        <Image width="60px" height="60px" src="/logo.png" alt="logo" />
      </Text>{' '}
      {/*mainbox--flex= total is 8*/}
      <Box
        flex={6}
        fontSize="20px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="orange"
      >
        <Link p={4}>Home</Link>
        {/*prop/ p is padding p-5 max-- pt pb pr pl px padding left and right -py padding top and bottom*/}
        <Link p={4}>About</Link>
        <Link p={4}>Contact</Link>
        <Link p={4}>Social Media</Link>
      </Box>
      <Box flex={1} display="flex">
        <FaShoppingCart fontSize="20px" />
        <Badge ml="3" colorScheme="green">
          {counterName + counterName2 + counterName3}
          {/* make total for product item in the cart */}
        </Badge>
      </Box>
    </Box>
  );
};

export default Nav;
