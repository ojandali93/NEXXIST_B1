import React, { useContext } from 'react';
import { PropertyListContext } from '../App.js';


export default function TopHeader(props) {
  const {} = props

  const { handlePageSelect } = useContext(PropertyListContext)

  return (
    <div className="main-header-container">
      <h1 onClick={() => {handlePageSelect("HOME", '')}} className="logo">NEXXIST</h1>
      <div className="header-icon-container">
        <img className="activity header-icon" alt="Activity" src="activity.png"/>
        <img className="profile header-icon" alt="Profile" src="profile.png"/>
      </div>
    </div>
  )
}
