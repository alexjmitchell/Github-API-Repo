import React from "react"
import * as moment from 'moment'

function Repos(props) {
  return (
    <aside>
      <ul className="tabs">
        <li>Overview</li>
        <li>Repositories</li>
        <li>Projects</li>
        <li>Packages</li>
        <li>Stars</li>
        <li>Followers</li>
        <li>Following</li>
      </ul>
      <form>
        <input type="text" placeholder="Find a repository..." />
        <select name="type">
          <optgroup label="Select type">
            <option value="All">Type: All</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Sources">Sources</option>
            <option value="Forks">Forks</option>
            <option value="Archived">Archived</option>
            <option value="Mirrors">Mirrors</option>
          </optgroup>
        </select>
        <select name="language">
          <optgroup label="Select language">
            <option value="All">Language: All</option>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML">HTML</option>
          </optgroup>
        </select>
      </form>
      <ul className="repos">
        {props.repos.map((repo, i) => (
          <div className="repo-container">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key={"repo-" + i}
            >
              <li>{repo.name}</li>
            </a>
            <div className="repo-details">
              <p className="languages">
                <div className={repo.language}></div>
                {repo.language}
              </p>
              <div>{moment(repo.updated_at).fromNow()}</div>
            </div>
          </div>
        ))}
      </ul>
    </aside>
  )
}

export default Repos
