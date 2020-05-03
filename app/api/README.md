# Data Model

## Entities

### Article

    Article
      id: String
      title: String
      subtitle: String?
      cover: ImageUrl?
      author: User.id
      content: String
      state: Draft | Published
      createdAt: Timestamp
      updatedAt: Timestamp
      publishedAt: Timestamp

### User

    User
      id: String
      name: String
      avatar: ImageUrl
      description : String?
      isMember: Boolean
      createdAt: Timestamp
      memberSince: Timestamp
      externalLinks:       
        personalPageUrl: Url
        twitter: Url?
        linkedIn: Url?
        facebook: Url? 

### Tag

    Tag
      id: String
      name: String

### Topic

    Topic
      id: String
      name: String
      description: String
      tags: [Tag.id]

### Publication

    Publication
      id: String
      name: String

## Relationships

Data entries that involve two or more entities.

### ArticleAuthor

    ArticleAuthor
      article: Article.id
      author: User.id

### ArticleUserClap

    ArticleUserClap
      article: Article.id
      clappingUser: User.id
      claps: Integer > 0

### ArticleUserComment

    ArticleUserComment
      id: String
      article: Article.id
      user: User.id
      content: String
      createdAt: Timestamp
      updatedAt: Timestamp

### ArticleTag

    ArticleTag
      article: Article.id
      tag: tag.id

### UserFollowing

    UserFollowing
      followee: User.id
      follower: User.id
      followedAt: Timestamp

### UserArticleBookmark

    UserArticleBookmark
      user: User.id
      article: Article.id

### TopicFollowing

    TopicFollowing
      topic: Topic.id
      user: User.id
      followedAt: Timestamp

### PublicationArticle

    ArticleInPublication
      publication: Publication.id
      article: Article.id
      publishedAt: Timestamp

### PublicationFollowing

    PublicationFollowing
      publication: Publication.id
      user: User.id
      followedAt: Timestamp
