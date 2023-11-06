
import './App.css';
import {Navbar} from './components/Navbar';
import {Main} from './components/Main'
import {About} from './components/About'
import { ScreenProvider } from './contexts/ScreenSize';


function App() {
  return (

    <>
    <ScreenProvider>
    <Navbar />
    <Main />
    <About />
    </ScreenProvider>
    
    </>
  );
}

export default App;
