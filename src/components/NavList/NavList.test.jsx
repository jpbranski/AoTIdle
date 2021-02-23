import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import NavList from './NavList';

it('testing if the App component loads', () => {
  const container = document.createElement( 'div' );
  ReactDOM.render( <BrowserRouter><NavList /></BrowserRouter>, container );
  ReactDOM.unmountComponentAtNode( container );
})