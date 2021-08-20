import { ICard } from '../types';

export default function getAmountOnCart(array:[],
  idToSearch:number) {
  const amount = array.map((current:ICard) => {
    if (current.id === idToSearch) {
      return current.amount!;
    }
    return 1;
  });
  return amount[0];
}
