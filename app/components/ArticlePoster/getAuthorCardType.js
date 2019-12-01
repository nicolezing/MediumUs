export default function getAuthorCardType(variation) {
  switch (variation) {
    case 'HomeHeroLeft':
    case 'HomeHeroMid':
    case 'HomeHeroRight':
    case 'HomeList':
    case 'TopicHomepageList':
      return { authorCardVariation: 'Home' };
    case 'TopicHomepageHero': {
      return { authorCardVariation: 'TopicHome' };
    }
    case 'PublicationHomepageHero':
    case 'PublicationHomepageListX2':
    case 'PublicationHomepageListX3':
      return {
        authorCardVariation: 'PublicationHome',
      };
    case 'ArticlePageTitle': {
      return { authorCardVariation: 'ArticleTitle' };
    }
    case 'ArticlePageRecommendation': {
      return { authorCardVariation: 'TopicHome' };
    }
    default:
      return null;
  }
}

// case 'Sidebar': {
//   // different 3 cases, will separate as different component
//   return { authorCardVariation: 'Home' };
// }
