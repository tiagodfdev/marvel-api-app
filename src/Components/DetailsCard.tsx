import React from 'react';
import {
  Flex, Text, Image,
} from '@chakra-ui/react';
import { ICard } from '../types';
import IncDecButton from './IncDecButton';

const DetailsCard = (props:ICard) => {
  const {
    id, title, image, price, rare,
  } = props;

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      w="100px"
      m={1}
      borderRadius={5}
      bg="card.bg"
      p={1}
      boxShadow={`${rare ? '0 0px 10px 0 rgba(255, 236, 92, 1), 0 0px 20px 0 rgba(255, 236, 92, 0.3)' : '0 0px 4px 0 rgba(255, 255, 255, 1), 0 0px 20px 0 rgba(255, 255, 255, 0.3)'}`}
    >
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Image
          src={`${image}/portrait_xlarge.jpg`}
          alt={`${title}`}
          borderTopRadius={5}
        />
        <Text color="card.title" fontWeight="bold" fontSize="sm" fontFamily="Roboto Bold">{`${title} ${rare ? 'Rare*' : ''}`}</Text>
      </Flex>
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="flex-end"
      >

        <Text color="card.priceColor" fontWeight="bold" fontSize="sm" fontFamily="Roboto Bold">{`US$: ${price}`}</Text>
        <IncDecButton id={id!} />
      </Flex>
    </Flex>
  );
};

export default DetailsCard;
