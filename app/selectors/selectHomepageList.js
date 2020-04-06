export function selectHomeList(state) {
  return state.homePage.homeList;
}

// export function selectNewFromNetwork(state) {
//   return state.testState.Homepage.newFromNetwork;
// }

// export function selectReadingList(state) {
//   return state.testState.Homepage.readingList;
// }

// export function selectPopularOnMedium(state) {
//   return state.testState.Homepage.popularOnMedium;
// }

export function selectHomeRecommendationLists(state, listName) {
  return state.homePage[listName];
}
