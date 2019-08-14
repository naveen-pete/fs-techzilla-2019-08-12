const users = [
  { id: 1, name: 'Ram' },
  { id: 2, name: 'Hari' },
  { id: 3, name: 'Krish' }
];

const posts = [
  { id: 1, userId: 1, title: 'u1 p1' },
  { id: 2, userId: 1, title: 'u1 p2' },
  { id: 3, userId: 2, title: 'u2 p1' },
  { id: 4, userId: 2, title: 'u2 p2' },
  { id: 5, userId: 3, title: 'u3 p1' },
  { id: 6, userId: 3, title: 'u3 p2' }
];

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    if (isNaN(id)) {
      reject('getUser() - User id should be numeric.');
      return;
    }

    setTimeout(() => {
      const user = users.find(u => u.id === id);
      resolve(user);
    }, 3000);
  });
};

const getPosts = (userId) => {
  return new Promise((resolve, reject) => {
    if (isNaN(userId)) {
      reject('getPosts() - User id should be numeric.');
      return;
    }

    setTimeout(() => {
      const postsForUser = posts.filter(p => p.userId === userId);
      resolve(postsForUser);
    }, 3000);
  })
}

console.log('Begin');

getUser(1)
  .then((user) => {
    console.log('user:', user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log('posts:', posts);
  })
  .catch((err) => {
    console.log('Error:', err);
  });

console.log('End');
