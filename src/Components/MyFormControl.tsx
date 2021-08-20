/* eslint-disable react/no-children-prop */
import React from 'react';
import {
  FormControl, Input, InputGroup, InputLeftAddon,
} from '@chakra-ui/react';
import { IForm } from '../types';

const MyFormControl = (props:IForm) => {
  const {
    id, label, type, setStateTarget, placeholder, isDisableEditStatus,
  } = props;
  return (
    <FormControl
      isRequired
      id={id}
      display="flex"
      listStyleType="none"
      mb="0.4rem"
      w="100%"
      color="#434343"
      backgroundColor="#e8e8e8"
      borderRadius="0.3rem"
      fontSize="x-large"
      fontFamily="Gelion Regular"
      fontWeight="400"
    >
      <InputGroup>
        <InputLeftAddon bg="form.leftAddon.bg" color="form.leftAddon.color" children={label} />
        <Input name={id} isDisabled={isDisableEditStatus} type={type} _placeholder={{ color: '#AAA' }} placeholder={placeholder} onChange={(e) => { setStateTarget(e.target.value); }} />
      </InputGroup>
    </FormControl>
  );
};

export default MyFormControl;
