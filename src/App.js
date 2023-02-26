import React, { useEffect } from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import New from './components/Pages/New';
import Home from './components/Home/Home';
import Login from './components/Pages/Login';
import Single from './components/Pages/Single';
import List from './components/Table/Table';
import { ProInputs, userInputs } from './components/formsource';
import Lists from './components/List/List';

function App() {
  useEffect(() => {
    let desc="It is Frontend Part of Admin dashboard project. By clicking on 'users' options in sidebar, related UI part will be shown. This project has been integrated with 'Booking App' MERN stack project with Both frontend & backend parts."
    
    alert(desc)
  }, []);
  
  return (
    <div className="App">
      <HashRouter>
          {/* <Nav /> */}
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route path="users">
                <Route index element={<Lists/>} />
                <Route exact path=":userid" element={<Single />} />
                <Route exact path="new" element={<New title='Add new User' inputs = {userInputs}/>} />
              </Route>
              <Route path="products">
                <Route index element={<Lists />} />
                <Route exact path=":userid" element={<Single />} />
                <Route exact path="new" element={<New title='Add new Product' inputs = {ProInputs}/>} />
              </Route>
            </Route>
          </Routes>
          </HashRouter>
    </div>
  );
}

export default App;
