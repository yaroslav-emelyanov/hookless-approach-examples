import { connect } from "react-redux"

import { Display } from "./display.component"
import { countSlice } from "./count.slice"

export const Count = connect(
  (state: { value: number }) => ({ count: state.value }),
  (dispatch) => ({
    onIncrement: () => dispatch(countSlice.actions.increment()),
  }),
)(Display)
