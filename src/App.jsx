import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

import Network from "./components/Network";
import Main from "./components/Main";
import Notify from "./components/Notify";
import JobsPage from "./components/Jobs";
import Message from "./components/MessagingPage";
function App() {
  return (
    <BrowserRouter>

      
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/network" element={<Network />} />
        <Route path="/notifications" element={<Notify />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/messages" element={<Message />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;