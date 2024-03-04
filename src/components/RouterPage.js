import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login';
import Registration from './Registration';
import Dashboard from './users/Dashboard';
import Orders from './users/Orders';
import Profile from './users/Profile';
import Cart from './users/Cart';
import AdminDashboard from './Admin/AdminDashboard';
import AdminOrders from './Admin/AdminOrders';
import CustomerList from './Admin/CustomerList';
import Medicine from './Admin/Medicine';

export default  function Routerpage(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/cart' element={<Cart/>}/>

                <Route path='/adminDashboard' element={<AdminDashboard/>}/>
                <Route path='/adminOrders' element={<AdminOrders/>}/>
                <Route path='/customerList' element={<CustomerList/>}/>
                <Route path='/medicine' element={<Medicine/>}/>
            </Routes>
        </Router>
    )
}