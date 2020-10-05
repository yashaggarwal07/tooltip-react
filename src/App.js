import React from 'react';
import './App.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

function App() {
  return (
    <div className="App">
<Tippy content='Tooltip is here'>
  <button class="tol-btn">Press</button>
</Tippy>
    </div>
  );
}

export default App;
