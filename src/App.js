
import './App.css';
import Navbar from './components/Navbar'
import WvtSection  from './components/WvtSection';
import MeetFounder from './components/MeetFounder';
import TreatmentFocus from './components/TreatmentFocus';
import OurServices from './components/OurServices';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <WvtSection/>
    <MeetFounder/>
    <TreatmentFocus/>
    <OurServices/>
    </div>
  );
}

export default App;
