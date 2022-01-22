import React from 'react';
export default function Counter({ count }) {
  return <h2 style={{ color: count % 2 == 0 ? 'red' : 'blue' }}>{count}</h2>;
}
