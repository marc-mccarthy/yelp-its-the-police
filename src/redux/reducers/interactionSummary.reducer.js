const interactionSummaryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INTERACTION_SUMMARY_REDUCER':
      console.log(action.payload);
      return action.payload;
    case 'RESET_FORM':
      return state = {};
    default:
      return state;
  }
};

export default interactionSummaryReducer;
