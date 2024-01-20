import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Space from "./pages/Space";

import Contact from "./pages/planets/Contact";
import Projects from "./pages/planets/Projects";
import Stacks from "./pages/planets/Stacks";
import AboutMe from "./pages/planets/AboutMe";
import Career from "./pages/planets/Career";

import Error404 from "./pages/Error404";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index={true} element={<Space />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="career" element={<Career />} />
          <Route path="stacks" element={<Stacks />} />
          <Route path="projects" element={<Projects />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};
export default Pages;
