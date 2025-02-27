import './App.css';
import Rectangle from './components/rect';
import { IoMdDownload } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

function App()
{
  return (
    <>
      <div className='container'>
        
          <div className='Main-page'>
            <div className='main-text'>
              <div className='social-icons'>
                <FaGithub />
                <FaLinkedin />
              </div>
              <div className='main-name'>
                <h2>Mikolaj Tarasiewicz</h2>
                <h1><span className='gradient-text'>Frontend</span> developer</h1>
              </div>
              <div className='download'><IoMdDownload /> <p>Download resume</p></div>
              <h4>I transform ideas into interactive, visually appealing web experiences using Figma, React, and Vite.</h4>
            </div>
            <div className='other-text'>
              <h3>Technologies I use:</h3>
              <div className='main-technologies'>
                <div className='tech-item'><FaJs /> <p>Javascript</p></div>
                <div className='tech-item'><SiTypescript /> <p>Typescript</p></div>
                <div className='tech-item'><FaReact /> <p>React</p></div>
                <div className='tech-item'><RiTailwindCssFill /> <p>Tailwind css</p></div>
                <div className='tech-item'><SiVite /> <p>Vite</p></div>
                <div className='tech-item'><FaFigma /> <p>Figma</p></div>
                <div className='tech-item'><TbBrandCpp /><p>C++</p></div>
              </div>
            </div>
          </div>
        
        <div className='About-page'>
          <div className='section'>
            <div className='section-title'>
              <h1>What I do specifically and why hire me?</h1>
            </div>
          </div>
          <div className='section'>
            <div className='text-container'><h2>Modern and unique designs</h2>
            <p>The design is <span className='highlight-text'>first prototyped</span> and made using <span className='highlight-text'>figma</span> so that the client can give feedback. 
              Also the website is made so that it is <span className='highlight-text'>aethetically matching</span> with the clients logo/brand.</p></div>
            <div className='rectangle-container'><Rectangle imageSrc='https://djdesignerlab.com/wp-content/uploads/2020/08/modern-website-design-03.png'></Rectangle></div>
          </div>
          <div className='section'>
            <div className='rectangle-container'><Rectangle imageSrc='https://blog.solguruz.com/wp-content/uploads/2023/11/Responsive-Web-Design-Key-Elements-And-Examples.png'></Rectangle></div>
            <div className='text-container'><h2>Responsive websites</h2>
            <p>The very important thing is for the website to <span className='highlight-text'>be accesible on every device</span> and not look weird or off. 
              Responsive web <span className='highlight-text'>allows</span> for people <span className='highlight-text'>to enter on every device</span> they want and have the best experiences.</p></div>
          </div>
          <div className='section'>
            <div className='text-container'><h2>Understanding the customers needs</h2>
            <p>I can <span className='highlight-text'>understand what the customer needs</span> in order for his website to stand out in a good way as well as what he wants. 
              Before prototyping I ask questions if anything is unclear to think through what the <span className='highlight-text'>best possible design</span> can be.</p></div>
            <div className='rectangle-container'><Rectangle imageSrc='https://neuroleadership.com/wp-content/uploads/2023/03/Three-Steps-for-Communicating-Better-According-to-Neuroscience-.png'></Rectangle></div>
          </div>
        </div>
        <div className='section'>
          <div className='Experience-page'>
            <h3>Currently no work experience</h3>
            <h1><span className='highlight-text'>Projects</span> done: </h1>
            <p>- Custom vector class in C++</p>
            <p>- Portfolio website design in figma</p>
            <p>- To-do list C++</p>
            <p>- Tic-Tac-Toe in C++</p>
          </div>
        </div>
        <div className='section'>
          <div className='Contact-page'>
            <p>Have questions?</p>
            <h1>Interested in getting your project done?</h1>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
