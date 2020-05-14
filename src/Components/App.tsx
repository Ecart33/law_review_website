import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Submit } from '../Pages/Submit';

import 'bootswatch/dist/lux/bootstrap.min.css';
import { Note } from '../Pages/Note';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/submit' component={Submit} />
        <Route
          path='/pages/:id'
          component={({ match: { params } }: any) => <Note id={params.id} />}
        />
      </Switch>
    </Router>
  );
};
