import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import NavHeader from './NavHeader';

it('testing if the App component loads', () => {
  const container = document.createElement( 'div' );
  ReactDOM.render( <BrowserRouter><NavHeader /></BrowserRouter>, container );
  ReactDOM.unmountComponentAtNode( container );
})