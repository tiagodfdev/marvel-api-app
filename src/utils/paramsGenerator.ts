import getNewHash from './getNewHash';

export default function paramsGenerator() {
  const hash = getNewHash();
  const params = new URLSearchParams();
  params.append('ts', hash.time.toString());
  params.append('apikey', process.env.REACT_APP_PUBLIC_KEY!);
  params.append('hash', hash.hash);
  params.append('dateDescriptor', 'thisMonth');
  return params;
}
