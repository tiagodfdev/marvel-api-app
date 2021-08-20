import { ICard } from '../types';

export default function getCartTotalCommon(array:[]) {
  const amount = array.map((current:ICard) => {
    if (current.rare === false) {
      return (current.amount! * current.price);
    }
    return 0;
  });
  const sum = amount.reduce((acc, cur) => acc + cur, 0);
  return sum;
}
