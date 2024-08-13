import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Footer,
  Navbar,
  Tech,
  Projects,
} from './components';
import Theme from './theme';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-tech bg-cover bg-center bg-no-repeat" style={{height: '100vh'}}>
        <Tech />
      </div>

      <div className="relative z-0">
        <div>
          <Navbar />
          {/* <Hero /> */}
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div style={{backgroundColor: '#69302f'}} className="bg-center bg-no-repeat">
          <Projects />
        </div>


        <div style={{backgroundColor: '#69302f'}}>
          <div  className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>

      <Theme>
        <Footer />
      </Theme>
      
    </BrowserRouter>
  );
};

export default App;
