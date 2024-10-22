
import './App.css';
import Navbar from './components/Navbar'
import WvtSection  from './components/WvtSection';
import MeetFounder from './components/MeetFounder';
import TreatmentFocus from './components/TreatmentFocus';
import OurServices from './components/OurServices';
import WhyPsychiatry from './components/WhyPsychiatry'
import Testimonials from './components/Testimonials';
import Steps from './components/Steps';
import StatesAndFAQ from './components/StatesAndFAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <WvtSection/>
    <MeetFounder/>
    <TreatmentFocus/>
    <OurServices/>
    <WhyPsychiatry/>
    <Testimonials/>
    <Steps/>
    <StatesAndFAQ/>
    <Footer/>
    </div>
  );
}

export default App;
