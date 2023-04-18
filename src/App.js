import React from 'react';


import './App.css'
import Clubcard from './Components/ClubCard/Clubcard.jsx';
import ResourceCard from './Components/ResourceCard/ResourceCard';
import Sports from './Clubs/Sports/Sports';

function App() {
  return (
    <>

      <ResourceCard />
      <Clubcard />
      <Sports />

    </>
  );
}

export default App;
