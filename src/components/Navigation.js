import React from "react"
import Icon from "../lib/Icon"

export default function(props) {
  return (
    <div className="top-nav-container">
      <ul>
        <section>
          <li>
            <Icon icon="github" className="github" />
          </li>
          <li>
            <input type="text" />
          </li>
          <div className="top-nav-items">
            <li>Pull Requests</li>
            <li>Issues</li>
            <li>Marketplace</li>
            <li>Explore</li>
          </div>
        </section>
      </ul>
      <ul>
        <li>
          <Icon icon="bell" className="bell" />
        </li>
      </ul>
    </div>
  )
}
