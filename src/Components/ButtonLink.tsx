import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ILinkButton } from '../types';

const ButtonLink = (props:ILinkButton) => {
  const { linkTo, label, size } = props;
  return (
    <Link to={`${linkTo}`}>
      <Button
        mt={3}
        size={size}
        bg="button.bg"
        color="button.color"
        _hover={{ bg: 'button.bgHover' }}
        px={5}
      >
        {label}
      </Button>
    </Link>
  );
};

export default ButtonLink;
