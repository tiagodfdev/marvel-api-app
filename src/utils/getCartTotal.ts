import { ICard } from '../types';

export default function getCartTotal(array:[]) {
  const amount = array.map((current:ICard) => current.amount! * current.price);
  const sum = amount.reduce((acc, cur) => acc + cur, 0);
  return sum;
}
