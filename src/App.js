import './App.css';
import {Navbar} from './components/Navbar';
import {Main} from './components/Main'

function App() {
  return (
    <>
    <Navbar />
    <Main />
    <div className='about'>
        <h1>Hello world</h1>
    </div>
    </>
  );
}

export default App;
