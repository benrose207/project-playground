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
import KeySequenceDetection from './components/javascript30/key_sequence_detection';
import SlideInOnScroll from './components/javascript30/slide_scroll';
import ObjectAndArrays from './components/javascript30/object_and_arrays';
import LocalStorageEventDelegation from './components/javascript30/localStorage_event_delegation';
import CSSTextShadow from './components/javascript30/css_text_shadow';
import SortWithoutArticles from './components/javascript30/sort_without_articles';
import TallyTimesReduce from './components/javascript30/tally_times_reduce';
import WebcamFun from './components/javascript30/webcam_fun';
import SpeechRecognition from './components/javascript30/speech_recognition';
import Geolocation from './components/javascript30/geolocation';
import FollowAlongLinks from './components/javascript30/follow_along_links';
import SpeechSynthesis from './components/javascript30/speech_synthesis';
import StickyNav from './components/javascript30/sticky_nav';
import EventCapture from './components/javascript30/event_capture';
import StripeDropdown from './components/javascript30/stripe_dropdown';
import ClickAndDrag from './components/javascript30/click_and_drag';
import VideoSpeedController from './components/javascript30/video_speed_controller';
import CountdownClock from './components/javascript30/countdown_clock';
import WhackAMole from './components/javascript30/whack_a_mole';
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
          <Route path="/javascript30/12" component={KeySequenceDetection}/>
          <Route path="/javascript30/13" component={SlideInOnScroll}/>
          <Route path="/javascript30/14" component={ObjectAndArrays}/>
          <Route path="/javascript30/15" component={LocalStorageEventDelegation}/>
          <Route path="/javascript30/16" component={CSSTextShadow}/>
          <Route path="/javascript30/17" component={SortWithoutArticles}/>
          <Route path="/javascript30/18" component={TallyTimesReduce}/>
          <Route path="/javascript30/19" component={WebcamFun}/>
          <Route path="/javascript30/20" component={SpeechRecognition}/>
          <Route path="/javascript30/21" component={Geolocation}/>
          <Route path="/javascript30/22" component={FollowAlongLinks}/>
          <Route path="/javascript30/23" component={SpeechSynthesis}/>
          <Route path="/javascript30/24" component={StickyNav}/>
          <Route path="/javascript30/25" component={EventCapture}/>
          <Route path="/javascript30/26" component={StripeDropdown}/>
          <Route path="/javascript30/27" component={ClickAndDrag}/>
          <Route path="/javascript30/28" component={VideoSpeedController}/>
          <Route path="/javascript30/29" component={CountdownClock}/>
          <Route path="/javascript30/30" component={WhackAMole}/>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
