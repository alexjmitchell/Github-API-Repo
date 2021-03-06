import React from "react"
import { Provider } from "react-redux"
import store from "../redux-store/store"
import { useGithub } from "../redux-store/Vendors/Github"
import User from "./User"
import Repos from "./Repos"
import Navigation from './Navigation'

function Wrap() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  const { user, repos } = useGithub("alexjmitchell")

  return (
    <>
      <Navigation />
      <div className="container">
        <User {...user} />
        <Repos repos={repos} />
      </div>
    </>
  )
}

export default Wrap
