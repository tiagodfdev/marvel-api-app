/* eslint-disable no-underscore-dangle */

import React, { useEffect, useState } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import api from '../../api';
import { IApiResponse, ICard } from '../../types';
import ComicCard from '../../Components/ComicCard';
import createRareCards from '../../utils/createRareCards';
import { useCart } from '../../context/Cart';
import paramsGenerator from '../../utils/paramsGenerator';

export default function Main() {
  // useCart é um hook com useContext para armazenar as informações do carrinho
  const { cart } = useCart();
  const [data, setData] = useState<ICard[]>([]);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    /* Effect condicional, */
    /* para se caso o cliente vá para o carrinho e volte para a main, */
    /* os cards não serem recarregados novamente, */
    /* aumentando assim a performace e a experiência do usuário */
    if (cart.length === 0) {
      (async () => {
        /* Geração do hash conforme documentação da API Marvel */
        /* e geração da query se encontram na função paramsGenerator() */

        const params = paramsGenerator();
        const response = await api.get('', { params });
        const arrayOfResults:IApiResponse[] = response.data.data.results;

        const allCards:ICard[] = createRareCards(arrayOfResults);
        setData(allCards);
        localStorage.setItem('localCards', JSON.stringify(allCards));
        setIsPageLoading(false);
      })();
    } else {
      setIsPageLoading(false);
      const storedCards = localStorage.getItem('localCards');
      setData(JSON.parse(storedCards!));
    }
  }, []);
  const cardRender = () => {
    const cards = data!.map((current) => (
      <ComicCard
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
  // Renderização condicional para rodar o loading enquanto o aguarda a resposta da api
  return (
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w="100vw"
      p="0.2rem"
      m="0"
      maxWidth="3xl"
    >
      <Flex
        flexDirection="row"
        alignItems="stretch"
        justifyContent="center"
        w="100vw"
        flexWrap="wrap"
      >
        {isPageLoading
          ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray"
              color="red"
              size="xl"
            />
          )
          : cardRender()}
      </Flex>

    </Flex>
  );
}
