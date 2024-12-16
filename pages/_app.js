import React from 'react';
import './global.css'; // CSS global importado aqui

function App({ Component }) {
  return (
    <div>
      <Component />
    </div>
  );
}

export default App;