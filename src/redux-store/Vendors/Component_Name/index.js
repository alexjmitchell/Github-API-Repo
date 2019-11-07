import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

// action names
const EXAMPLE = "component/EXAMPLE"

// reducer
const initialState = {
  items: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE:
      return { ...state }
    default:
      return state
  }
}

// custom hook
export function useCustomHook() {
  const dispatch = useDispatch()
  const data = useSelector()

   // return actions and props needed
}

// actions

// function addItem() {
//   useEffect(() => {
//     Axios.get("data-path").then(response => {
//       dispatch({
//         type: EXAMPLE,
//         payload: response.data
//       })
//     })
//   })
// }