import React, {useState} from 'react';
import {Route, Routes}  from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Accessory from './pages/Accessory'
import Kid from './pages/Kid'
import Men from './pages/Men'
import Women from './pages/Women'
import Store from './pages/Store'
import LoginJoin from './pages/LoginJoin'
import Cart from './pages/Cart'
import Order from './pages/Order'
import { AllContext } from './context/AllContext';


const App = () => {

  const [active, setActive] = useState(0)
  const [logged, setLogged] = useState(sessionStorage.getItem('id'))
  const [bags, setBags] = useState([])


  return (
      <AllContext.Provider value={{active, setActive, logged, setLogged, bags, setBags}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/accessory" element={<Accessory/>} />
            <Route path="/kid" element={<Kid/>} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/auth/loginjoin" element={<LoginJoin />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart/:code" element={<Cart />} />
            <Route path="/order" element={<Order />} />
          </Route>
        </Routes>
      </AllContext.Provider>
  );
};

export default App;