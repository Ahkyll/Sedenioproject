import { createRoot } from 'react-dom/client'
import {BrowserRouter } from 'react-router';
import './index.css'
import Router from './router/Router.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
)
