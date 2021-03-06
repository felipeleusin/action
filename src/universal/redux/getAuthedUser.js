export const getAuthQueryString = `
query {
  user: getCurrentUser {
    email,
    id,
    isNew,
    picture,
    preferredName
  }
}`;

const updateTokenMutationHandlers = {
  updateUserProfile(optimisticVariables, queryResponse, currentResponse) {
    if (optimisticVariables) {
      Object.assign(currentResponse.user, optimisticVariables.updatedProfile);
    } else if (queryResponse) {
      Object.assign(currentResponse.user, queryResponse);
    }
    return currentResponse;
  },
  updateUserWithAuthToken(optimisticVariables, queryResponse, currentResponse) {
    if (queryResponse) {
      currentResponse.user = queryResponse;
      return currentResponse;
    }
    return undefined;
  },
};

export const authedOptions = {
  component: 'getAuthedUser',
  mutationHandlers: updateTokenMutationHandlers,
  localOnly: true
};
