import { useEffect, useState } from "react";
import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Me from "./components/Me";
import More from "./components/More";
import { CV } from "./CV/CV";
import About from "./components/About";
import { setMe } from "./redux/me/me.action";
//import { Route, Routes } from 'react-router';


function App() {

  const { me, education, experience, languages } = CV;
  const [set, setNew] = useState('');

  useEffect(() => {
    setMe(me);
  }, [me]);

  return (
    <div className="App">
      <div>
        <Me me={me} />
      </div>
      <div>
        <button type="button" className="button" onClick={() => setNew('About')}>Conocimientos</button>
        <button type="button" className="button" onClick={() => setNew('Education')}>Educación</button>
        <button type="button" className="button" onClick={() => setNew('Experience')}>Experiencia laboral</button>
        <button type="button" className="button" onClick={() => setNew('More')}>Otros datos de interés</button>
      </div>
      {set === 'About' && <About aboutMe={me.aboutMe} />}
      {set === 'Education' && <Education className="education" education={education} />}
      {set === 'Experience' && <Experience experience={experience} />}
      {set === 'More' && <More languages={languages} />}
    </div>
  );
}

export default App;

/*<Routes>
          <Route active path="/" element={""} />
          <Route path="/education" element={<Education className="education" education={education} />} />
          <Route path="/experience" element={<Experience experience={experience} />} />
          <Route path="/more" element={<More languages={languages} />} />
        </Routes>*/