import './App.css';
import Footer from './components/footer/footer';
import Herosection from './components/herosection/herosection';
import AboutMe from './components/aboutme/aboutme.';
import Header from './components/header/header';
import Resume from './components/resume/resume';
import Services from './components/services/services';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="herosection"><Herosection /></section>
      <section id="about"><AboutMe /></section>
      <section id="services"><Services /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Footer /></section>
    </div>
  );
}

export default App;
