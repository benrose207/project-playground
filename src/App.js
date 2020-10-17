import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import NavBar from './components/navigation/navbar';
import JavaScript30 from './components/javascript30/javascript30';
import DrumKit from './components/javascript30/drum_kit';
import Clock from './components/javascript30/clock';
import CSSVariables from './components/javascript30/css_variables';
import ArrayCardio1 from './components/javascript30/array_cardio1';
import FlexPanelsImageGallery from './components/javascript30/flex_panels_image_gallery';
import AjaxTypeAhead from './components/javascript30/ajax_type_ahead';
import ArrayCardio2 from './components/javascript30/array_cardio2';
import HTML5Canvas from './components/javascript30/html5_canvas';
import MustKnowDevTools from './components/javascript30/must_know_devtools';
import MultipleCheckboxes from './components/javascript30/mutiple_checkboxes';
import VideoPlayer from './components/javascript30/video_player';
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
          <Route path="/javascript30/4" component={ArrayCardio1}/>
          <Route path="/javascript30/5" component={FlexPanelsImageGallery}/>
          <Route path="/javascript30/6" component={AjaxTypeAhead}/>
          <Route path="/javascript30/7" component={ArrayCardio2}/>
          <Route path="/javascript30/8" component={HTML5Canvas}/>
          <Route path="/javascript30/9" component={MustKnowDevTools}/>
          <Route path="/javascript30/10" component={MultipleCheckboxes}/>
          <Route path="/javascript30/11" component={VideoPlayer}/>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
