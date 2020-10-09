import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navigation/navbar';
import JavaScript30 from './components/javascript30/javascript30';
import DrumKit from './components/javascript30/drum_kit';
import Clock from './components/javascript30/clock';
import Footer from './components/navigation/footer';


function App() {
  return (
    <>
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/javascript30" component={JavaScript30}/>
          <Route path="/javascript30/1" component={DrumKit}/>
          <Route path="/javascript30/2" component={Clock}/>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
