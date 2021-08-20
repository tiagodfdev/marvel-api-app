import React from 'react';
import {
  Flex, Text, Image,
} from '@chakra-ui/react';
import { ICard } from '../types';

const CheckoutCard = (props:ICard) => {
  const {
    title, image, price, rare, amount,
  } = props;

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      w="50px"
      m={1}
      borderRadius={5}
      bg="card.bg"
      p={1}
      boxShadow={`${rare ? '0 0px 10px 0 rgba(255, 236, 92, 1), 0 0px 10px 0 rgba(255, 236, 92, 0.8)' : '0 0px 4px 0 rgba(255, 255, 255, 1), 0 0px 20px 0 rgba(255, 255, 255, 0.3)'}`}
    >
      <Image
        src={`${image}/portrait_xlarge.jpg`}
        alt={`${title}`}
        borderTopRadius={5}
      />
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Text color="card.color" fontWeight="light" fontSize="xx-small" fontFamily="Roboto Bold">{`${amount} x $${price}`}</Text>
        <Text color="card.color" fontWeight="thin" fontSize="xx-small" fontFamily="Roboto Bold">{`Total:${amount! * price}`}</Text>
      </Flex>
    </Flex>
  );
};

export default CheckoutCard;
