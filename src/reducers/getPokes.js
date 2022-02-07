const pokes = (state = [], action) => {
  switch (action.type) {
    case 'GET_POKES':
      return [
        state = action
      ]
    case 'CLEAR_POKES':
      return state = []
    default:
      return state
  }
}

export default pokes