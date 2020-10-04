import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navigation/navbar';
import JavaScript30 from './components/javascript30/javascript30';
import DrumKit from './components/javascript30/drum_kit';


function App() {
  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/javascript30" component={JavaScript30}/>
          <Route path="/javascript30/1" component={DrumKit}/>
        </Switch>
      </main>
    </>
  );
}

export default App;
