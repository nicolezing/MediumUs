import {
  renderList,
  renderSectionTitle,
} from '../PublicationHomepageHerosBasic';

const renderListInSection = arrangementObject => (title, theme) => {
  let componentTitle;
  if (title !== 'default') {
    componentTitle = renderSectionTitle(title);
  }
  const heroComponentList = arrangementObject[title].map(arr =>
    renderList(arr, theme),
  );
  return [componentTitle, ...heroComponentList];
};

export default renderListInSection;
