export function selectHomepageHerosLists(state) {
  const { mainHeros, homeList } = state.homePage;
  return { mainHeros, homeList };
}

export function selectHomepageLinkList(state) {
  const { navbarList, footerList } = state.homePage;
  return { navbarList, footerList };
}

export function selectHomepageSidebarLists(state) {
  const { newFromNetwork, popularOnMedium, readingList } = state.homePage;
  return { newFromNetwork, popularOnMedium, readingList };
}
