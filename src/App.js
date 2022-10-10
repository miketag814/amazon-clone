import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import Orders from './Orders'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from './firebase'
import {useStateValue} from "./StateProvider"
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LrMeLLeesarKiF4s2AZgJTXqIcx894GsaeR1XJvrLugL9nMGdCIh91PH7d73hJHCxbd39ruML4F2aBEoCYYTNun009U7nD5De"
);

function App() {

  const[ {}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>>>, authUser");

      if(authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM 
    <Router>
      <div className="app">
        

        <Routes>
          <Route path="/checkout" element={[<Header />, <Checkout /> ]} />
          <Route path='/' element={[<Header />, <Home />]} />
          <Route path='/login' element={<Login />}/>
          <Route path='/payment' element={[<Header />, <Elements stripe={promise}>
            <Payment />
          </Elements>]} />
          <Route path='/orders' element={[<Header />, <Orders />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
