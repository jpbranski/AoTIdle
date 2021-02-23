import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Artisan from './Artisan';

it('testing if the App component loads', () => {
  const container = document.createElement( 'div' );
  ReactDOM.render( <BrowserRouter><Artisan /></BrowserRouter>, container );
  ReactDOM.unmountComponentAtNode( container );
})