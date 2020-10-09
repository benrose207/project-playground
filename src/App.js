import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import NavBar from './components/navigation/navbar';
import JavaScript30 from './components/javascript30/javascript30';
import DrumKit from './components/javascript30/drum_kit';
import Clock from './components/javascript30/clock';
import CSSVariables from './components/javascript30/css_variables';
import Footer from './components/navigation/footer';


const App = () => {
  const history = createBrowserHistory();
  ReactGA.initialize('UA-175985833-4');
  ReactGA.pageview(window.location.pathname + window.location.hash.slice(1) + window.location.search);
  history.listen((location) => {
    ReactGA.pageview(location.pathname + location.hash.slice(1) + location.search);
  });

  return (
    <>
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/javascript30" component={JavaScript30}/>
          <Route path="/javascript30/1" component={DrumKit}/>
          <Route path="/javascript30/2" component={Clock}/>
          <Route path="/javascript30/3" component={CSSVariables}/>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
