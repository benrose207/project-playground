import React from 'react';
import DrumKit from './components/drum_kit';
import NavBar from './components/navigation/navbar';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <DrumKit />
      </main>
    </>
  );
}

export default App;
