import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "./Assets/css/style.css";
import { NavBar, HomeBody, ProjectsView, About } from './Assets/js/components.js';
import { Persuasive } from './Assets/js/persuasive.js';
import { HumaneOS } from './Assets/js/humaneos';
import { UCRE } from './Assets/js/ucre.js';
import { KidsTeam } from './Assets/js/kidsteam.js';
import 'animate.css';



function App(props) {

  // hooks
  let navigate = useNavigate();

  // event handling functions
  function handleClickHome() {
    document.querySelector(".about").classList.remove("active");
    document.querySelector(".work").classList.remove("active");
    let element = document.querySelector(".home");
    element.classList.add("active");
    navigate("/");
  }

  function handleClickWork() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.remove("active");
    let element = document.querySelector(".work");
    element.classList.add("active");
    navigate("/work");
  }

  function handleClickAbout() {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".work").classList.remove("active");
    let element = document.querySelector(".about");
    element.classList.add("active");
    navigate("/about");
  }

  function handleClickIndv(project) {
    navigate(project.To);
  }


  // rendering app 
  return (
    <div>
      <NavBar handleClickHome={handleClickHome} handleClickWork={handleClickWork} handleClickAbout={handleClickAbout} />
      <Routes>
        <Route path="/about"
          element={<>
            <About />
          </>
          } />

        <Route path="/work"
          element={
            <>
              <ProjectsView data={props.data} handleClickIndv={handleClickIndv} />
            </>
          } />

        <Route path="/"
          element={
            <>
              <HomeBody data={props.data.slice(0, 2)} handleClick={handleClickWork} handleClickIndv={handleClickIndv} />
            </>
          } />

        <Route path="/01"
          element={<UCRE />} />

        <Route path="/02"
          element={<Persuasive />} />

        <Route path="/03"
          element={<KidsTeam />} />

        <Route path="/04"
          element={<HumaneOS />} />
      </Routes>
    </div>
  );
}

export default App;