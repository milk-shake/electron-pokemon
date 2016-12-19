export function showModal(options) {
  return function(dispatch, getState) {
    dispatch({type: "SHOW_MODAL", payload: options});
  }
}

export function closeModal() {
  return function(dispatch, getState) {
    dispatch({type: "CLOSE_MODAL", payload: null});
  }
}

export function onFilterInput(val) {
  return function(dispatch, getState) {
    dispatch({type: "FILTER_MODAL", payload: val});
  }
}
