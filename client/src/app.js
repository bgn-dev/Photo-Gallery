import { useState } from 'react';
import Grid from './components/grid';
import Enlarged from './components/enlarged';
import Upload from './components/upload';

import './app.css';

function App() {

  // constant for the enlarged image, which gets passed to the Grid.jsx and Enlarged.jsx
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Upload />
        <Grid setSelectedImg={setSelectedImg} />
        {selectedImg && <Enlarged selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      </header>
    </div>
  );
}

export default App;
