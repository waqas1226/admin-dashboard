import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import New from './components/Pages/New';
import Home from './components/Home/Home';
import Login from './components/Pages/Login';
import Single from './components/Pages/Single';
import List from './components/Table/Table';
import { ProInputs, userInputs } from './components/formsource';
import Lists from './components/List/List';
// import BNavbar from './components/BookingApp/BNavbar';
// import Search from './components/BookingApp/Search/Search';
// import SingleSer from './components/BookingApp/SingleSer/SingleSer';



function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
          {/* <Nav /> */}
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />

              <Route exact path="/login" element={<Login />} />
              {/* <Route exact path="/B" element={<BNavbar />} />

              <Route exact path="/Search" element={<Search/>} /> */}

              {/* <Route path="B">
                <Route index element={<BNavbar/>} />
                <Route path="Search"> 
                <Route index element={<Search/>} />
                <Route exact path=":userid" element={<SingleSer />} />
                </Route>
              </Route> */}

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
          </BrowserRouter>
    </div>
  );
}

export default App;
