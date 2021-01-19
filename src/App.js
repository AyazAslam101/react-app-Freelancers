import React from 'react'
import FreelancerLoginFrom from "./components/freelancerForm/freelancerLogin/freelancerLoginFrom"
import './App.css';
import Navbar from './components/navbar/navbar'
// import Freelancer from "./components/freelancers/freelancers"

function App() {
  return (
    <div className="App">
      <Navbar />
      <FreelancerLoginFrom/>
    </div>
  );
}

export default App;
