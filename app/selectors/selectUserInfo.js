export function selectUserInfo(state, id) {
  return state.testState.users[id];
}

export function selectUserMediaInfo(state, id) {
  const { twitter, facebook, linkedIn } = state.testState.users[id];
  return { twitter, facebook, linkedIn };
}
