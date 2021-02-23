import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Gathering from './Gathering';

it('testing if the App component loads', () => {
  const container = document.createElement( 'div' );
  ReactDOM.render( <BrowserRouter><Gathering /></BrowserRouter>, container );
  ReactDOM.unmountComponentAtNode( container );
})