import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import SignUpPage from './Components/SignUpPage';
import SignInPage from './Components/SignInPage';
import TaskFormPage from './Components/TaskFormPage';
import TaskListPage from './Components/TaskListPage';
import SettingsPage from './Components/SettingsPage';
import ProgressPage from './Components/ProgressPage';

function App(){
  return(
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact Component={HomePage} />
        <Route path='/signup'  Component={SignUpPage} />
        <Route path='/signin'  Component={SignInPage} />
        <Route path='/taskform'  Component={TaskFormPage} />
        <Route path='/tasklist'  Component={TaskListPage} />
        <Route path='/settings'  Component={SettingsPage} />
        <Route path='/progress'  Component={ProgressPage} />

      </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;
