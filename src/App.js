import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "./Assets/css/style.css";
import { NavBar, HomeBody, ProjectsView, About, Footer } from './Assets/js/components.js';
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

  function handleClickCollapse() {
    let coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
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
          element={<UCRE handleClick={handleClickCollapse}/>} />

        <Route path="/02"
          element={<Persuasive handleClick={handleClickCollapse}/>} />

        <Route path="/03"
          element={<KidsTeam handleClick={handleClickCollapse}/>} />

        <Route path="/04"
          element={<HumaneOS handleClick={handleClickCollapse}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;