
import './App.css';
import {Navbar} from './components/Navbar';
import {Main} from './components/Main'
import {About} from './components/About'
import { ScreenProvider } from './contexts/ScreenSize';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';



function App() {
  return (

    <>
    <ScreenProvider>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Footer />
    </ScreenProvider>
    
    </>
  );
}

export default App;
