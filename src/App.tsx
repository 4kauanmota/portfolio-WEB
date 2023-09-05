import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Space from "./pages/Space";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Stacks from "./pages/Stacks";
import AboutMe from "./pages/AboutMe";
import Links from "./pages/Links";

function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/">
              <Route index={true} element={<Space />} />
              <Route index={false} path="contact" element={<Contact />} />
              <Route index={false} path="projects" element={<Projects />} />
              <Route index={false} path="stacks" element={<Stacks />} />
              <Route index={false} path="aboutMe" element={<AboutMe />} />
              <Route index={false} path="links" element={<Links />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
