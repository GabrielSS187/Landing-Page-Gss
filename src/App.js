import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//* Pages
import Home from "./pages/Home";
import Register from "./pages/Register";

//* Style Global
import StyleGlobal from "./styles/StyleGlobal";

function App() {

  return (

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      
        <StyleGlobal />

    </BrowserRouter>

  );
};

export default App;