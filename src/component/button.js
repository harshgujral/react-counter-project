import React from 'react';
export default function Button({ data, func }) {
  return (
    <div className="buttons">
      <button onClick={() => func()}>{data}</button>
    </div>
  );
}
