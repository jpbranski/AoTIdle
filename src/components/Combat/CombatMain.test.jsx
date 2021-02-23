import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import CombatMain from './CombatMain';

it('testing if the App component loads', () => {
  const container = document.createElement( 'div' );
  ReactDOM.render( <BrowserRouter><CombatMain /></BrowserRouter>, container );
  ReactDOM.unmountComponentAtNode( container );
})