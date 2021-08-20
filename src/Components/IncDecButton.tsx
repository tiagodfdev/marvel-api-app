/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import {
  Flex, NumberInput,
  NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
} from '@chakra-ui/react';
import { ICard } from '../types';
import { useCart } from '../context/Cart';
import getAmountOnCart from '../utils/getAmountOnCart';

const IncDecButton = (props:any) => {
  const { id } = props;
  const { cart, setCart } = useCart();
  const [amountValue, setAmountValue] = useState(getAmountOnCart(cart, id));

  function searchAndSetAmountCart(array:[],
    setArray:React.Dispatch<React.SetStateAction<any>>,
    idToSearch:number,
    value:number) {
    const newArray = array.map((current:ICard) => {
      if (current.id === idToSearch) {
        current.amount = value;
        return current;
      }
      return current;
    });
    setArray(newArray);
    setAmountValue(value);
  }

  /* PASSAR FUNÇÃO ACIMA PRA UTILS E FAZER O GET TOTAL */
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      w={20}
      m={1}
      borderRadius={5}
      bg="card.bg"
      p={1}
    >
      <NumberInput
        size="xs"
        onChange={(valueChanged) => searchAndSetAmountCart(
          cart, setCart, id, (parseInt(valueChanged, 10)),
        )}
        value={amountValue}
        max={50}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
};
export default IncDecButton;
