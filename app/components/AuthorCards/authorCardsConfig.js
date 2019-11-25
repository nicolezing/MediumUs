export default function getConfig(variation) {
  switch (variation) {
    case 'CollectionHome':
      return { avatarSize: '36px', avatarDisplay: true, followButton: false };
    case 'TopicHome':
      return { avatarSize: '40px', avatarDisplay: true, followButton: false };
    case 'Home':
      return { avatarSize: '', avatarDisplay: false, followButton: false };
    case 'ArticleTitle':
      return { avatarSize: '48px', avatarDisplay: true, followButton: true };
    default:
      throw new Error(`Unknown variantion: ${variation}`);
  }
}
