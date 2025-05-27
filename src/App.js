import logo from './logo.svg';
import React from 'react';
import {useState} from 'react'
import './App.css';
import { FeedbackProvider } from './context/FeedbackContext';
import {BrowserRouter as Router,Route,Routes,NavLink} from'react-router-dom';
import FeedbackList from './Components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import Header from './Components/Header';
import Feedbackitem from './Components/Feedbackitem';
import Home from './Components/pages/Home';
import AboutIcon from './Components/pages/AboutIcon';

function App() {
  const body="somya";
  const title ="mishra"
  const comments =[
    {id:2,name:"somya"},
    {id:3,name:"mishra"},
    {id:4,name:"dhanbad"},

  ]
  const [feedback,setFeedback]=useState(FeedbackData)
  
  return (
    <FeedbackProvider>
    <Router> 
      <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/hii" element={<><Header text="Hello World"></Header>
    <div className="container">
       <Feedbackitem/>
       
    </div></>}></Route>
        </Routes>
        <AboutIcon></AboutIcon>
      
    </Router>
    </FeedbackProvider>
   
  );
}

export default App;
