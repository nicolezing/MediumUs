export default function getConfig(variation) {
  switch (variation) {
    case 'HomeHeroLeft':
    case 'HomeHeroMid':
    case 'HomeHeroRight':
    case 'HomeList':
    case 'TopicHomepageList':
      return { authorCardVariation: 'Home' };

    case 'Sidebar': {
      // different 3 cases, will separate as different component
      return { authorCardVariation: 'Home' };
    }

    case 'TopicHomepageHero': {
      return { authorCardVariation: 'TopicHome' };
    }
    case 'CollectionHomepageHero':
    case 'CollectionHomepageList':
      return { authorCardVariation: 'CollectionHome' };

    case 'ArticlePageTitle': {
      return { authorCardVariation: 'ArticleTitle' };
    }
    case 'ArticlePageRecommend': {
      // different case??
      return { authorCardVariation: 'TopicHome' };
    }
    case '': {
      break;
    }
    default:
      return null;
  }
}
