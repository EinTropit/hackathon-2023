import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import {Nav, Mast, Services, Team, Contact, Main, Footer} from './comps.jsx'
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [Page, setPage] = useState('Home');

  return (
    <div id="page-top">
    <Nav Page={Page}/>
    <Main Page={Page}/>
    <Mast />

    <Services />
    <Team />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
