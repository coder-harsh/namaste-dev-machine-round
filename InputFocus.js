import React, { useRef } from 'react';
function InputFocus() {
  const inputref = useRef();
  const handleclick = () => {
    inputref.current.focus();
  }
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Type here" ref={inputref}
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      <button onClick={handleclick} style={{ padding: '8px 12px' }}>
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus;
