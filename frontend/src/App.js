import './App.css';

function App() {
  const year = new Date().getFullYear();
  const age = year - 2003;
  return (
    <div className = "App">
      {/** Main Section */}
      <div>
        <h1>Hi, I'm Kristin ! </h1>
        <p>
          I'm a {age} software developer from Melbourne, Australia. I love
          designing and coding websites!
        </p>
      </div>
      {/** About Section */}
      <div>
        <h3>About Me</h3>
        <p>text about me</p>
      </div>

      {/** Education Section */}
      <div>
        <h3>Education</h3>
        <div>
          <p>
            Monash University
          </p>
          <div>
            <p>2021 - 2025.</p>
          </div>
        </div>
      </div>

      {/** Experience Section */}
      <div>
        <h3>Experience</h3>
      </div>

      {/** Skills Section */}
      <div>
        <h3>Skills</h3>
      </div>

      {/** Projects Section */}
      
    </div>
  );
}

export default App;
