import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Product from './component/Product';

function App() {
  const [counter, setCounter] = useState(0) //0 is where to start cart need to start at 0
  const [counter2, setCounter2] = useState(0) 
  const [counter3, setCounter3] = useState(0) 



  // counter is state act like variable--if we need to change value or anything in counter 
  //we need to use set infront so it setCounter by +1
  // below is function we do addition--add function 
  const add = ()=>{
    if(counter >= 5){
      alert("Can not buy more than 5 items")
      return counter
    }
    else{
      return setCounter(counter+1)
    }

  }
  //create const or function for minus
  const minus =() =>{
    if(counter <= 0){
      alert("Can not go below 0")
      return counter
    }
    else{
      return setCounter(counter-1)
    }
   
  }

//second products

const add2 = ()=>{
  if(counter2 >= 5){
    alert("Can not buy more than 5 items")
    return counter2
  }
  else{
    return setCounter2(counter2+1)
  }

}
//create const or function for minus
const minus2 =() =>{
  if(counter2 <= 0){
    alert("Can not go below 0")
    return counter2
  }
  else{
    return setCounter2(counter2-1)
  }
 
}

//last products

const add3 = ()=>{
  if(counter3 >= 5){
    alert("Can not buy more than 5 items")
    return counter3
  }
  else{
    return setCounter3(counter3+1)
  }

}
//create const or function for minus
const minus3 =() =>{
  if(counter3 <= 0){
    alert("Can not go below 0")
    return setCounter3
  }
  else{
    return setCounter3(counter3-1)
  }
 
}



  return (

    <div>
   
      <Nav counterName = {counter}   counterName2 = {counter2}  counterName3 = {counter3} />
     <Box fontSize="30px" fontWeight="800" color="#FC7300" m={5} textAlign="center">
      LoLo's Shop
     </Box>
      <Product counterName = {counter} counterName2 = {counter2} counterName3 = {counter3} 
      addition ={add} minus ={minus} 
      addition2 ={add2} minus2 ={minus2} 
      addition3 ={add3} minus3 ={minus3} 
      
      
      
      />
      {/* next we pass prop from add and minus above */}
      <Footer />

    
    </div>
  );

}


export default App;
