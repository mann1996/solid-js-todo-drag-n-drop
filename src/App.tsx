import { Route, Routes } from "solid-app-router";
import type { Component } from "solid-js";
import { Container, Navbar } from "./components";
import { Home } from "./pages";
import { About } from "./pages/about";
const App: Component = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
