/* eslint-disable no-underscore-dangle */

import React, { useState } from 'react';

import { Flex, Button, Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import MyFormControl from '../../Components/MyFormControl';
import { useCart } from '../../context/Cart';
import CheckoutCard from '../../Components/CheckoutCard';
import { ICard } from '../../types';
import getCartTotal from '../../utils/getCartTotal';
import { coupons } from '../../constants/coupons';
import discountCalc from '../../utils/discountCalc';

export default function Checkout() {
  const history = useHistory();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submitState, setSubmitState] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const { cart } = useCart();

  const { common, rare } = coupons;

  const cardRender = () => {
    const cards = cart.map((current:ICard) => (
      <CheckoutCard
        key={current.id}
        title={current.title}
        image={current.image}
        price={current.price}
        rare={current.rare}
        amount={current.amount}
      />
    ));
    return cards;
  };

  if (coupon === common || coupon === rare || coupon) {
    if (coupon !== common && coupon !== rare) {
      setDiscount(discountCalc(coupon, cart));
    }
    setDiscount(discountCalc(coupon, cart));
    setCoupon('');
  }

  const fakeSender = async (body:object) => {
    setTimeout(() => console.log(body), 1000);
  };

  const onSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    const dateTreatment = moment(birthDate, 'YYYY-MM-DD').format('DD/MM/YYYY');
    const bodySend = {
      firstName, lastName, phone, dateTreatment, address, email,
    };
    setSubmitState(true);
    await fakeSender(bodySend);
    alert('End of application');
    history.push('/');
    /* Fim da aplicação com os dados sendo externalizados através do fakeSender() */
  };

  return (
    <Flex justifyContent="space-between" alignItems="flex-start" flexWrap="wrap-reverse" flexDirection="row" w="100%" maxWidth="3xl">
      <Flex>
        <form onSubmit={onSubmit}>
          <MyFormControl id="firstName" label="Nome" type="text" placeholder="Nome" setStateTarget={setFirstName} />
          <MyFormControl id="lastName" label="Sobrenome" type="text" placeholder="Sobrenome" setStateTarget={setLastName} />
          <MyFormControl id="phone" label="Telefone" type="text" placeholder="Telefone" setStateTarget={setPhone} />
          <MyFormControl id="birthDate" label="Data de Nasc." type="date" placeholder="Data de nascimento" setStateTarget={setBirthDate} />
          <MyFormControl id="address" label="Endereço" type="text" placeholder="Endereço" setStateTarget={setAddress} />
          <MyFormControl id="email" label="E-mail" type="email" placeholder="E-mail" setStateTarget={setEmail} />
          <MyFormControl id="coupon" label="Coupon" type="text" placeholder="Coupon" setStateTarget={setCoupon} />
          <Button
            size="md"
            bg="button.bg"
            color="button.color"
            m="0 0.2rem"
            onClick={() => history.push('/details')}
          >
            Back
          </Button>
          <Button
            size="md"
            bg="button.bg"
            color="button.color"
            m="0 0.2rem"
            isLoading={submitState}
            loadingText="Process..."
            type="submit"
          >
            Payment
          </Button>
        </form>
      </Flex>
      <Flex
        alignSelf="flex-end"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        h="100%"
        w="350px"
        p="0"
        mb="0.4rem"
        maxWidth="3xl"
        borderRadius={5}
        bg="#e8e8e8"
      >
        <Flex
          flexDirection="row"
          alignItems="stretch"
          justifyContent="flex-start"
          flexWrap="wrap"
          mb={5}
        >
          {cardRender()}
        </Flex>
        <Flex w="100%" flexDirection="column" fontSize="medium" color="#202020">
          <Flex ml={2} justifyContent="space-between">
            <Text fontWeight="normal">Subtotal:</Text>
            <Text fontWeight="normal">{`US$ ${getCartTotal(cart).toFixed(2)}`}</Text>
          </Flex>
          <Flex ml={2} justifyContent="space-between">
            <Text fontWeight="normal">Descontos:</Text>
            <Text fontWeight="normal">{`US$ ${discount.toFixed(2)}`}</Text>
          </Flex>
          <Flex ml={2} justifyContent="space-between">
            <Text fontWeight="bold">Total:</Text>
            <Text fontWeight="bold">{`US$ ${(getCartTotal(cart) - discount).toFixed(2)}`}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
