import React from 'react'

function ProfileCard(props) {
  return (
    <div className="cards">
        <div className="top">
          <div className="logo">
            <img src={props.logo} alt="" />
          </div>
          <div className="post">
            <span>{props.post}</span>
          </div>
        </div>

        <div className="middle">
          <h3>{props.name}</h3>
          <h1>{props.version}</h1>
          <p>{props.about}</p>
        </div>
      </div>
  )
}

export default ProfileCard

