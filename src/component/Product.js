import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
//data base array object-jason object



const Product = ({ counterName,counterName2, counterName3,  addition, minus,  addition2, minus2,  addition3, minus3}) => {

  const db = [
    {
      id: 1,
      name: 'T-shirt',
      url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
      price: 10,
      state: counterName,
      op:addition ,
      om:minus,
    },
  
    {
      id: 2,
      name: 'Hat',
      url: 'https://images.unsplash.com/photo-1603923407810-f61528416aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      price: 8,
      state: counterName2,
      op:addition2 ,
      om: minus2,
    },
  
    {
      id: 3,
      name: 'Sock',
      url: 'https://images.unsplash.com/photo-1517686748843-bb360cfc62b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      price: 3,
      state: counterName3,
      op: addition3 ,
      om: minus3,
    },
  
  ];


  return (
    <Box height="auto">
      {/* firstbox- image */}
    {
      db.map((product)=>{
        return(
          <>
            <Box display="flex" my={5} marginTop='50px' justifyContent="center" alignItems="center" key={product.id}>
        <Image
          ml={5}
          width={100}
          height={100}
          src= {product.url}
          alt={product.name}
        />

        {/* second box below +0- m is margin / ml is margin left/ mr is margin right/ mt mb margin top bottom
        / my margin top and bottom*/}
        <Box display="flex" gap={5} m={5} cursor="pointer">
          <AddIcon onClick={product.op} />
           <Text>{product.state}</Text> 
          <MinusIcon onClick={product.om} />
        </Box>
      </Box>
      {/* text is like p tag */}
      <Text textAlign="center" marginLeft="-110px">{product.name}</Text>
      <Text textAlign="center" marginLeft="-110px">${product.price}</Text>
          
          </>
        )
      })
    }
     
    </Box>
  );
};

export default Product;
