import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import FutureContent from './FutureContent';

it('testing if the App component loads', () => {
  const container = document.createElement( 'div' );
  ReactDOM.render( <BrowserRouter><FutureContent /></BrowserRouter>, container );
  ReactDOM.unmountComponentAtNode( container );
})