import React from 'react'

export default function TopHeader() {

  return (
    <div className="main-header-container">
      <h1 className="logo">NEXXIST</h1>
      <div className="header-icon-container">
        <img className="activity header-icon" src="activity.png"/>
        <img className="profile header-icon" src="profile.png"/>
      </div>
    </div>
  )
}
