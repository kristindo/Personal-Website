import './App.css';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  const year = new Date().getFullYear();
  const age = year - 2003;
  return (
    <div className="App">
      {/** Main Section */}
      <div className="main">
        <div className="description">
          <div>
            <h1 className="name">hi, i'm kristin ! </h1>
            <p>frontend and backend developer. currently, my main goal is to improve my css skills !!!!  </p>
          </div>
          <div className = "image">
              <p> Image </p>
          </div>
      
        </div>
      </div>
      {/** About Section */}
      <div>
        <h3>About Me</h3>
        <p>i'm a {age} year old from melbourne, australia. 
          my hobbies include programming, designing, playing with my dog and going outside.  
        </p>
      </div>

      {/** Education Section */}
      <div>
        <Education 
        logo="MonashLogo.jpg"
        university="Monash University"
        degree="Bachelor of Information Technology"
        date="2021 - 2025" />
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
