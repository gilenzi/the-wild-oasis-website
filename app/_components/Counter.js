'use client';

import {useState} from 'react';

export function Counter({users}) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      {count}
      <button onClick={() => setCount(count - 1)}>DEc</button>
    </div>
  );
}
