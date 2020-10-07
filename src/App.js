import React, { Component, createContext, useState }  from 'react';

import Header from './Components/Header/Header';
import NetVolunterDataLoad from './Components/NetworkVolunterLIst/NetVolunterDataLoad';
import Volunteer from './Components/Volunteer/Volunteer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Components/Register/Register';
import Login from './Components/GoogleSignIn/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const userContext = createContext()

function App() {
   const [loggedInUser,setLoggedinUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser,setLoggedinUser]}>
    <Router>
      <Switch>
     
       <Route path="/login">
          <Login></Login>
       </Route>
       <PrivateRoute path="/Register/:id">
               <Register></Register>
        </PrivateRoute>
        

        <Route path="/">
              <Header></Header>
              <Volunteer></Volunteer>
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}






export default App;
