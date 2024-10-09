import React from 'react'
import './main.css'
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

function Main() {

  return (
    <>
      <div className="partA">
        <h2>Ernad Thomas</h2> <br />
        <div className="prof">
        <h1>FULL STACK DEVELOPER</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jLhDQjJ4Hu-tMCFbGDKO_-A2ozkHPheIdQ&s" alt="men" />
        
        <div className="personal">
        <h3>Full Name : Ernad Thomas</h3>
        <h3>Address : 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.</h3>
        <h3>Contact Info : 9223434563</h3>
        </div>

        </div>
      </div>
     
    </>
  )
}

export default Main
