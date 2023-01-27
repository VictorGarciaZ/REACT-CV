import { useState } from "react";
import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Me from "./components/Me";
import More from "./components/More";
import { CV } from "./CV/CV";
import About from "./components/About";

//const { me, education, experience, languages } = CV;

//<button type="button" onclick={()=>setNew('About')}>Info</button>
//{set === 'About' && <About about={me.aboutMe} /> }

function App() {
    
  const { me, education, experience, languages } = CV;
  const [set, setNew] = useState('');
  
  return (
    <div className="App">
        <Me me={me}/>
        <div>
          <button type="button" className="button" onClick={()=>setNew('About')}>Info</button>
          <button type="button" className="button" onClick={()=>setNew('Education')}>Educación</button>
          <button type="button" className="button" onClick={()=>setNew('Experience')}>Experiencia laboral</button>
          <button type="button" className="button" onClick={()=>setNew('More')}>Otros datos de interés</button>
        </div>
        {set === 'About' && <About aboutMe={me.aboutMe} /> }
        {set === 'Education' && <Education className="education" education={education} /> }
        {set === 'Experience' && <Experience experience={experience}/> }
        {set === 'More' && <More languages={languages} /> }
    </div>
  );
}

export default App;