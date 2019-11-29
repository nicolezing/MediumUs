export default function getConfig(variation) {
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
    case 'CollectionHomepageHero':
    case 'CollectionHomepageListX2':
    case 'CollectionHomepageListX3':
      return {
        authorCardVariation: 'CollectionHome',
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
