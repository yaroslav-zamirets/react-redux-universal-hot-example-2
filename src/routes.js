import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
  App,
  HomePage,
  NotFound
} from 'containers';

export default (store) => { // eslint-disable-line
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={HomePage} />

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
