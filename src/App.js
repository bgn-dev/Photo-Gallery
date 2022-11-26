import { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Picture from './components/Picture';
import Upload from './components/Upload';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Upload />
        <Grid setSelectedImg={setSelectedImg}/>
        { selectedImg && <Picture selectedImg={selectedImg} setSelectedImg={setSelectedImg } /> }
      </header>
    </div>
  );
}

export default App;
