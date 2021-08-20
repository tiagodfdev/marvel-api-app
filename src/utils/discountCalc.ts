import getCartTotal from './getCartTotal';
import getCartTotalCommon from './getCartTotalCommon';

export default function discountCalc(typeOfCoupon:string, cart:[]) {
  if (typeOfCoupon === 'rare') {
    const subtotal = getCartTotal(cart);
    const discountValue = subtotal * 0.25;
    return discountValue;
  }
  if (typeOfCoupon === 'common') {
    const subtotal = getCartTotalCommon(cart);
    console.log(subtotal);
    const discountValue = subtotal * 0.1;
    return discountValue;
  }
  return 0;
}
