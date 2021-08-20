import { ICard } from '../types';

export default function isOnCart(id:number, cart:any) {
  const obj = {
    id,
  };
  if (cart.some((elem:ICard) => elem.id === obj.id)) {
    return true;
  }
  return false;
}
