import jwtDecode from 'jwt-decode';

export default function merger(initialState, persistedState) {
  // Update this list for each new duck written
  const whitelist = new Set(['authToken', 'cashay', 'notifications']);
  const result = {};
  const persistedStateKeys = Object.keys(persistedState);
  for (let i = 0; i < persistedStateKeys.length; i++) {
    const reducerName = persistedStateKeys[i];
    if (!whitelist.has(reducerName)) continue;
    const value = persistedState[reducerName];
    if (reducerName === 'authToken' && value) {
      const authTokenObj = jwtDecode(value);
      if (authTokenObj.exp < Date.now() / 1000) {
        continue;
      }
    }
    if (reducerName === 'cashay') {
      // remove subscriptions from the result array
      value.data.result.presence = undefined;
      value.data.result.teamMembers = undefined;

      // remove entities that have unbounded growth (socketIds are random)
      value.data.entities.Presence = undefined;
    }
    result[reducerName] = value;
  }
  return result;
}
