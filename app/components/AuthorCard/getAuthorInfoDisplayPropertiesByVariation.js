export default function getAuthorInfoDisplayPropertiesByVariation(variation) {
  switch (variation) {
    case 'PublicationHome':
      return {
        avatarSize: '36px',
        isDisplayAvatar: true,
        hasFollowButton: false,
      };
    case 'TopicHome':
      return {
        avatarSize: '40px',
        isDisplayAvatar: true,
        hasFollowButton: false,
      };
    case 'Home':
      return { avatarSize: '', isDisplayAvatar: false, hasFollowButton: false };
    case 'ArticleTitle':
      return {
        avatarSize: '48px',
        isDisplayAvatar: true,
        hasFollowButton: true,
      };
    default:
      throw new Error(`Unknown variation: ${variation}`);
  }
}
