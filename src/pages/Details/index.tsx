/* eslint-disable no-underscore-dangle */

import React from 'react';

import { Flex } from '@chakra-ui/react';
import { useCart } from '../../context/Cart';
import { ICard } from '../../types';
import DetailsCard from '../../Components/DetailsCard';
import ButtonLink from '../../Components/ButtonLink';

export default function Details() {
  const { cart } = useCart();
  const cardRender = () => {
    const cards = cart.map((current:ICard) => (
      <DetailsCard
        key={current.id}
        id={current.id}
        title={current.title}
        image={current.image}
        price={current.price}
        rare={current.rare}
      />
    ));
    return cards;
  };
  return (
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
      p="0.2rem"
      m="0"
      maxWidth="3xl"
    >
      <Flex
        flexDirection="row"
        alignItems="stretch"
        justifyContent="center"
        flexWrap="wrap"
      >
        {cardRender()}
      </Flex>
      {/* Foi optado por não utilizar history.push / goBack da
      lib react-router-dom devido a ser um app de 3 páginas apenas */}
      <Flex>
        <Flex
          mr={2}
        >
          <ButtonLink linkTo="/" label="Back" size="md" />
        </Flex>
        <Flex>
          <ButtonLink linkTo="/checkout" label="Checkout" size="md" />
        </Flex>
      </Flex>
    </Flex>
  );
}
