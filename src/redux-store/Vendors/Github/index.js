import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

// action names
const GET_USER = "gh/GET_USER"
const GET_REPOS = "gh/GET_REPOS"

// reducer
const initialState = {
  user: {},
  repos: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload }
    case GET_REPOS:
      return { ...state, repos: action.payload }
    default:
      return state
  }
}

// custom hook
export function useGithub(username) {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.Reducer.user)
  const repos = useSelector(appState => appState.Reducer.repos)

  useEffect(() => {
    dispatch(getUser(username))
    dispatch(getRepos(username))
  }, [username, dispatch])

  return { user, repos }
  // return actions and props needed
}

// actions

function getUser(username) {
  return dispatch => {
    Axios.get(`https://api.github.com/users/${username}`).then(response => {
      dispatch({
        type: GET_USER,
        payload: response.data
      })
    })
  }
}

function getRepos(username) {
  return dispatch => {
    Axios.get(`https://api.github.com/users/${username}/repos`).then(
      response => {
        dispatch({
          type: GET_REPOS,
          payload: response.data
        })
      }
    )
  }
}
