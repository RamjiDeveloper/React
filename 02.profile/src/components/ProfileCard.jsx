import React from 'react'

function ProfileCard(props) {
  return (
      <div className="profile-cards">
        <div className='top'>
          <span>{props.span}</span>
          <h3>{props.pay}</h3>
        </div>
        <div className="profile-img">
          <img src={props.img} alt="" />
          <h2>{props.name}</h2>
          <h4>{props.post}</h4>
          <a href='#'>{props.profession}</a>
          <div className="tag">
            <h5>{props.tags[0]}</h5>
            <h5>{props.tags[1]}</h5>
            <h5>{props.tags[2]}</h5>
            <h5>{props.tags[3]}</h5>
          </div>
          <div className="about">
            <p>{props.about}</p>
          </div>
        </div>
        <div className="bottom">
          <a href="#">{props.view}</a>
        </div>
      </div>
  )
}

export default ProfileCard
