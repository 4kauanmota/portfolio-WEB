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
          <Route index={false} path="contact" element={<Contact />} />
          <Route index={false} path="aboutMe" element={<AboutMe />} />
          <Route index={false} path="career" element={<Career />} />
          <Route index={false} path="stacks" element={<Stacks />} />
          <Route index={false} path="projects" element={<Projects />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};
export default Pages;
