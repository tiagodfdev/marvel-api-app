import md5 from 'md5';

export default function getNewHash() {
  const time = Number(new Date());
  const hash = md5(time + process.env.REACT_APP_PRIVATE_KEY! + process.env.REACT_APP_PUBLIC_KEY);
  return { time, hash };
}
