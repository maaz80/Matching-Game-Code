import { Routes, Route } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Game from "./components/Game";
import Winner from "./components/Winner";
import Guide from "./components/Guide";

export default function App() {
  return (
<div className="md:h-screen h-[700px] md:w-screen bg-cover bg-center flex justify-center items-center relative bg-no-repeat" style={{ backgroundImage: `url('https://plays.org/game/pet-link-kids/img/menu_back.jpg')` }}>

     
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/game" element={<Game />} />
        <Route path="/winner" element={<Winner/>} />
        <Route path="/guide" element={<Guide/>} />
      </Routes>
    </div>
  );
}
