// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TherapistDashboard from "./components/TherapistDashboard"

// function App() {
//   return (
//     <Router>
//       <Routes>
//                 <Route path="/therapist-dashboard" element={<TherapistDashboard/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TherapistDashboard from "./components/TherapistDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<TherapistDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
