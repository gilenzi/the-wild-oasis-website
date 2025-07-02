'use client';

import {useSearchParams} from 'next/navigation';

export default function Filter(props) {
  const searchParams = useSearchParams();
  const capacity = searchParams.get('capacity') || 'all';
  console.log(capacity);
  return <div>Filter</div>;
}
