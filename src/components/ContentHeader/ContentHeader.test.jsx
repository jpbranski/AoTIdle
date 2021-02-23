import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import ContentHeader from './ContentHeader';

it('testing if the App component loads', () => {
  const container = document.createElement( 'div' );
  ReactDOM.render( <BrowserRouter><ContentHeader /></BrowserRouter>, container );
  ReactDOM.unmountComponentAtNode( container );
})