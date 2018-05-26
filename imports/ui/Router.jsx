import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from '../home/Home'
import LoginPage from '../login/Login'
import CreateAccountPage from '../login/CreateAccount'
import Contacts from '../contacts/Contacts'
import PageNotFound from './PageNotFound'

export default Router = () => <BrowserRouter>
  <Switch>
    <Route path="/contacts" exact component={Contacts}/>
    <Route path="/createaccount" exact component={CreateAccountPage}/>
    <Route path="/login" exact component={LoginPage}/>
    <Route path="/" exact component={HomePage}/>
    <Route path="*" component={PageNotFound}/>
  </Switch>
</BrowserRouter>