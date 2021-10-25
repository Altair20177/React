import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer/>
        <Sidebar />
        <div className="content">
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/profile/:userID?" render={() => <MainContainer/>} />
          <Route path="/users" render={() => <UsersContainer />}/>
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;