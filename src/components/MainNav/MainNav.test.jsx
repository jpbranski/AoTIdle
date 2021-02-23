import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import MainNav from './MainNav';

it('testing if the App component loads', () => {
  const container = document.createElement( 'div' );
  ReactDOM.render( <BrowserRouter><MainNav /></BrowserRouter>, container );
  ReactDOM.unmountComponentAtNode( container );
})