mutation user1 {
    createUser(input: {name: "danny", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4nmCJlp7hDyy66T0_8qX4bP0LWzovX2AOw&usqp=CAU"}) {
      id
      name
    }
  }
  
  mutation user2 {
    createUser(input: {name: "daniel", image: "https://pbs.twimg.com/profile_images/922198162273472512/Qs5rDmCe.jpg"}) {
      id
      name
    }
  }
  
  mutation user3 {
    createUser(input: {name: "pradeep", image: "https://images.unsplash.com/photo-1566275535544-d5e758d35d84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"}) {
      id
      name
    }
  }
  
  mutation user4 {
    createUser(input: {name: "Danil", image: "https://i.pinimg.com/originals/92/2d/fb/922dfbf61577fa27ea0b76095dbe0543.jpg"}) {
      id
      name
    }
  }
  
  mutation post1 {
    createPost(input: {userID: "",likes: 0,caption: "Hey there", image: "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story1 {
    createStory(input: {userID: "", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  mutation post2 {
    createPost(input: {userID: "",likes: 12,caption: "Check this out", image: "https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story2 {
    createStory(input: {userID: "", image: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  mutation post3 {
    createPost(input: {userID: "", likes: 10,caption: "Like4Likes", image: "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story3 {
    createStory(input: {userID: "", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  mutation post4 {
    createPost(input: {userID: "",likes: 40, caption: "isn't this awesome", image: "https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story4 {
    createStory(input: {userID: "", image: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  query listPosts {
    listPosts {
      items {
        caption
        createdAt
        id
        image
        user {
          id
          image
          name
        }
      }
    }
  }
  
  query listStorys {
    listStorys {
      items {
        createdAt
        id
        image
        user {
          id
          image
          name
        }
      }
    }
  }