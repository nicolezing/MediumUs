export function selectPublicationAllInfo(state, publicationId) {
  return state.testState.publications[publicationId];
}

export function selectPublicationMetaInfo(state, publicationId) {
  const { name, description, icon } = state.testState.publications[
    publicationId
  ];
  return { name, description, icon };
}

export function selectPublicationHeader(state, publicationId) {
  const { name, logo, slogan, link } = state.testState.publications[
    publicationId
  ];
  return { name, logo, slogan, link };
}

export function selectPublicationNavbarInfo(state, publicationId) {
  const {
    navbar,
    socialMedia,
    theme,
    logoSmall,
    link,
  } = state.testState.publications[publicationId];
  return { navbar, socialMedia, theme, logoSmall, link };
}

export function selectPublicationHeroInfo(state, publicationId) {
  const { heroList, pageArrangements, theme } = state.testState.publications[
    publicationId
  ];
  return { heroList, pageArrangements, theme };
}

export function selectPublicationFooter(state, publicationId) {
  return state.testState.publications[publicationId].footer;
}
