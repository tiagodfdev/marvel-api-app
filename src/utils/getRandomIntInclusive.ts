/* eslint-disable consistent-return */
export default function getRandomIntInclusive(min:number, max:number, numbersDesired:number) {
  const arrayOfRandomNumbers:number[] = [];
  while (arrayOfRandomNumbers.length < numbersDesired) {
    const minNew = Math.ceil(min);
    const maxNew = Math.floor(max);
    const currentNumber = Math.floor(Math.random() * (maxNew - minNew + 1)) + minNew;
    if (arrayOfRandomNumbers.includes(currentNumber)) {
      return;
    }
    arrayOfRandomNumbers.push(currentNumber);
  }
  return arrayOfRandomNumbers;
}
