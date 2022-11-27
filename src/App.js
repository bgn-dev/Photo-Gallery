import { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Enlarged from './components/Enlarged';
import Upload from './components/Upload';

function App() {

  // constant for the enlarged image, which gets passed to the Grid.jsx and Enlarged.jsx
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Upload />
        <Grid setSelectedImg={setSelectedImg}/>
        { selectedImg && <Enlarged selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
      </header>
    </div>
  );
}

export default App;
