import React from "react"
import Icon from "../lib/Icon"

function User(props) {
  return (
    <div className="profile">
      <img src={props.avatar_url} alt={props.name} />
      <h1>{props.name}</h1>
      <h3>{props.login}</h3>
      <div className="profile-details-nav">
        <aside className="email">
          <Icon icon="envelope" />
          <a href="mailto:alexj.mitchell94@gmail.com">
            alexj.mitchell94@gmail.com
          </a>
        </aside>
        <aside className="location">
          <Icon icon="map-marker" />
          <p>Las Vegas, Nevada</p>
        </aside>
        <button>Edit Profile</button>
      </div>
    </div>
  )
}

export default User
