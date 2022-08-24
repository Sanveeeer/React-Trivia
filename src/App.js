import './App.css';
import Footer from './components/Footer';
import image from './img/TriviaBg.png';
import Header from './components/Header';


function App() {
  return (
    <div className='App' style={{backgroundImage:`url(${image})`}}>  
      <Header />
      <Footer />
    </div>
  );
}

export default App;
