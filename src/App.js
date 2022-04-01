import './App.css';
import Piccard from './components/img/jean-luc_picard-patrick-stewart.jpg'
import Spock from './components/img/mr-spock.jpg'
import Worf from './components/img/large_71fea85f98bdcef7c8ebd78727293771-tenente_worf_-_star_trek_tng.jpg'

function App() {
  
  return (
    <div className="App">
    <h1>Starfleet Crew</h1>
    <div className='crew'>
    <div><img src={Piccard} style={{width: '300px'}} alt="Piccard"/></div>
    <div><img src={Spock} style={{width: '300px', height: '229px'}} alt="Spock"/></div>
    <div><img src={Worf} style={{width: '300px'}} alt="Worf"/></div>
    </div>
    </div>
  );
}

export default App;
