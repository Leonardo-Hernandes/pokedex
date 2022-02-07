const pokeDetails = (state = [], action) => {
  switch (action.type) {
    case 'GET_DETAILS':
      return [
        state = action.data
      ]
    case 'CLEAR_DETAILS':
      return state = []
    default:
      return state
  }
}

export default pokeDetails