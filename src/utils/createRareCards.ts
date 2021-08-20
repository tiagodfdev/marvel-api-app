import { IApiResponse } from '../types';
import getRandomIntInclusive from './getRandomIntInclusive';

export default function createRareCards(arrayOfResults:IApiResponse[]) {
  const numberOfRareCards = Math.round(arrayOfResults.length * 0.12);
  const rareIndex = getRandomIntInclusive(0, arrayOfResults.length, numberOfRareCards);
  const result = arrayOfResults.map((currentObj, index) => {
    if (rareIndex!.includes(index)) {
      return {
        id: currentObj.id,
        title: currentObj.title,
        image: currentObj.thumbnail.path,
        price: currentObj.prices[0].price,
        rare: true,
      };
    }
    return {
      id: currentObj.id,
      title: currentObj.title,
      image: currentObj.thumbnail.path,
      price: currentObj.prices[0].price,
      rare: false,
    };
  });
  return result;
}
