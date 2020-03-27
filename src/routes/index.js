import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

// Routes unsigned
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// Routes signed
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
