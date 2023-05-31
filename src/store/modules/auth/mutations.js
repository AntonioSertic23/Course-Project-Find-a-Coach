export default {
  setUser(state, payload) {
    state.token = payload.tokeen;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};
