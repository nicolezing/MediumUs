import {
  renderList,
  renderSectionTitle,
} from '../PublicationHomepageHerosBasic';

const renderListInSection = arrangementObject => title => {
  let componentTitle;
  if (title !== 'default') {
    componentTitle = renderSectionTitle(title);
  }
  const heroComponentList = arrangementObject[title].map(arr =>
    renderList(arr),
  );
  return [componentTitle, ...heroComponentList];
};

export default renderListInSection;
