import React from 'react'

export default function TopHeader() {

  return (
    <div className="main-header-container">
      <h1 className="logo">NEXXIST</h1>
      <div className="header-icon-container">
        <img className="activity header-icon" alt="Activity" src="activity.png"/>
        <img className="profile header-icon" alt="Profile" src="profile.png"/>
      </div>
    </div>
  )
}
