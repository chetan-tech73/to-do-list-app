import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import SignUpPage from './Components/SignUpPage';
import SignInPage from './Components/SignInPage';
import TaskFormPage from './Components/TaskFormPage';
import TaskListPage from './Components/TaskListPage';
import SettingsPage from './Components/SettingsPage';
import ProgressPage from './Components/ProgressPage';

const App = () =>{
  return( 
  <Router> 
 <div>
      <Header />
     <Routes>
     <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/taskform" element={<TaskFormPage />} />
          <Route path="/tasklist" element={<TaskListPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/progress" element={<ProgressPage />} />
     
     </Routes>
      
    </div>
  </Router>
    
   
    
  );
}
export default App;
