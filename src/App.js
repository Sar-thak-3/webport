import Navbar from './components/Navbar';
import Story from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {BrowserRouter} from 'react-router-dom'
import Blog from './components/Blog';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Story />
    <Projects/>
    <Blog/>
    <Contact/>
    </BrowserRouter>
    </>
  );
}

export default App;
