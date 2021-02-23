import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import MainContent from './MainContent';

it('testing if the App component loads', () => {
  const container = document.createElement( 'div' );
  ReactDOM.render( <BrowserRouter><MainContent /></BrowserRouter>, container );
  ReactDOM.unmountComponentAtNode( container );
})