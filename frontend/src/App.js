import './App.css';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Sakura from './components/Sakura/Sakura';

function App() {
  const year = new Date().getFullYear();
  const age = year - 2003;
  return (
    <div className="App">
      <Sakura />
      {/** Main Section */}
      <div className="main">
        <div className="description">
          <div>
            <h1 className="name">hi, i'm kristin ! </h1>
            <p>frontend and backend developer. currently, my main goal is to improve my css skills !!!!  </p>
          </div>
          <div className = "image">
              <img className="profile" src="honey.jpg" alt="Logo" width={230} height={230}/>
          </div>
      
        </div>
      </div>
      {/** About Section */}
      <div>
        <h3 className = "about">About Me</h3>
        <p>i'm a {age} year old from melbourne, australia. 
          my hobbies include programming, designing, playing with my dog and going outside.  
        </p>
      </div>

      {/** Education Section */}
      
      <div>
        <h3 className = "education">Education</h3>
        <Education 
        logo="MonashLogo.jpg"
        university="Monash University"
        degree="Bachelor of Information Technology"
        date="2021 - 2025" />
              <div>
        <Education 
        logo="killester-college-favicon.png"
        university="Killester College"
        degree="VCE"
        date="2015 - 2020" />
      </div>
      </div>


      {/** Experience Section */}
      <div>
        <Experience />
      </div>

      {/** Skills Section */}
      <div>
        <Skills />
      </div>

      {/** Projects Section */}
      <div>
        <Projects />
      </div>
    </div>
  );
}

export default App;
