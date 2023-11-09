
import './App.css';
import {Navbar} from './components/Navbar';
import {Main} from './components/Main'
import {About} from './components/About'
import { ScreenProvider } from './contexts/ScreenSize';
import { Projects } from './components/Projects';
import {motion} from 'framer-motion'


function App() {
  return (

    <>
    <ScreenProvider>
      <Navbar />
      <Main />
      <About />
      <Projects />
    </ScreenProvider>
    
    </>
  );
}

export default App;
