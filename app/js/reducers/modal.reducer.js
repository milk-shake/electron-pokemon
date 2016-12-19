export default function ModalReducer(state = {
  type: null,
  props: {},
  filtered: null
}, action)
{
  switch(action.type) {
    case "SHOW_MODAL": {
      return Object.assign({}, state, {type: action.payload.type, props: action.payload.props});
    }
    case "CLOSE_MODAL": {
      return Object.assign({}, state, {type: null, props: null, filtered: null});
    }
    case "FILTER_MODAL": {
      let results = state.props.results.filter(function(result) {
        if(result.filterOn.toLowerCase().startsWith(action.payload)) {
          return result;
        }
      });

      let newState = Object.assign({}, state, {filtered: results});
      return newState;
    }
    default: {
      return state;
      break
    }
  }
}
