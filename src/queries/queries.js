import { gql } from '@apollo/client'

export const SIGNUP = gql`
mutation createUser($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    username
  }
}

`

export const LOGIN = gql`
mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        value
    }
}
`

export const ME = gql`
query {
  me {
    username
    wall
    bio
    pic
    posts {
      title
      img
      body
      likes
      tags
    }
    friends {
      username
      wall
      bio
      pic
      posts {
        title
        img
        body
        likes
        tags
      }
    }
    friendOf {
        username
        wall
        bio
        pic
        posts {
          title
          img
          body
          likes
          tags
        }
    }
  }
}
`

const POST_DETAILS = gql`
  fragment PostDetails on Post {
    title
    img
    body
    likes
    tags
    author {
      username
    }
  }
`

export const POST_COUNT = gql`
query {
    postCount
}
`

export const ALL_USERS = gql`

query {
  allUsers {
    username
    wall
    bio
    pic
    posts {
      title
      img
      body
      likes
      tags
    }
    friends {
      username
      wall
      bio
      pic
      posts {
        title
        img
        body
        likes
        tags
      }
    }
    friendOf {
        username
        wall
        bio
        pic
        posts {
          title
          img
          body
          likes
          tags
        }
    }
  }
}

`

export const ALL_POSTS = gql`
query {
    allPosts {
      ...PostDetails
    }
}
${POST_DETAILS}
`

export const CREATE_POST = gql`
mutation createPost($title: String!, $img: String!, $body: String!, $likes: Int! $tags: [String!]!) {
    addPost(
        title: $title
        img: $img
        body: $body
        likes: $likes
        tags: $tags
    ) {
        ...PostDetails
    }
}
${POST_DETAILS}
`

export const ADD_LIKES = gql`

mutation addLikes($title: String!, $setLikesto: Int!) {
  addLikes(title: $title, setLikesto: $setLikesto) {
    ...PostDetails
}
}
${POST_DETAILS}
`

export const EDIT_BIO = gql`

mutation editBio($bio: Int!) {
  editBio(bio: $bio) {
    username
    wall
    bio
    pic
    posts {
      title
      img
      body
      likes
      tags
    }
    friends {
      username
      wall
      bio
      pic
      posts {
        title
        img
        body
        likes
        tags
      }
    }
    friendOf {
        username
        wall
        bio
        pic
        posts {
          title
          img
          body
          likes
          tags
        }
    }
  }
}

`

export const EDIT_AVATAR = gql`

mutation editAvatar($pic: Int!) {
  editAvatar(pic: $pic) {
    username
    wall
    bio
    pic
    posts {
      title
      img
      body
      likes
      tags
    }
    friends {
      username
      wall
      bio
      pic
      posts {
        title
        img
        body
        likes
        tags
      }
    }
    friendOf {
        username
        wall
        bio
        pic
        posts {
          title
          img
          body
          likes
          tags
        }
    }
  }
}

`

export const EDIT_WALL = gql`

mutation editWall($wall: Int!) {
  editWall(wall: $wall) {
    username
    wall
    bio
    pic
    posts {
      title
      img
      body
      likes
      tags
    }
    friends {
      username
      wall
      bio
      pic
      posts {
        title
        img
        body
        likes
        tags
      }
    }
    friendOf {
        username
        wall
        bio
        pic
        posts {
          title
          img
          body
          likes
          tags
        }
    }
  }
}

`

export const USER_ADDED = gql`

subscription {
  userAdded {
    username
    wall
    bio
    pic
    posts {
      title
      img
      body
      likes
      tags
    }
    friends {
      username
      wall
      bio
      pic
      posts {
        title
        img
        body
        likes
        tags
      }
    }
    friendOf {
        username
        wall
        bio
        pic
        posts {
          title
          img
          body
          likes
          tags
        }
    }
  }
}

`

export const POST_ADDED = gql`

subscription {
  postAdded {
    ...postDetails
  }
}
${POST_DETAILS}
`