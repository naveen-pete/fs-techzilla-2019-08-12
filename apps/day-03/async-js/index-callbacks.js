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

const getUser = (id, cb) => {
  if (isNaN(id)) {
    cb('User id should be numeric.');
    return;
  }

  setTimeout(() => {
    const user = users.find(u => u.id === id);
    cb(null, user);
  }, 3000);
};

const getPosts = (userId, cb) => {
  if (isNaN(userId)) {
    cb('User id should be numeric.');
    return;
  }

  setTimeout(() => {
    const postsForUser = posts.filter(p => p.userId === userId);
    cb(null, postsForUser);
  }, 3000);
}

console.log('Begin');

getUser(1, (err, user) => {
  if (err) {
    console.log('User Error:', err);
    return;
  }

  console.log('user:', user);
  getPosts(user.id, (err, posts) => {
    if (err) {
      console.log('Posts Error:', err);
      return;
    }

    console.log('posts:', posts);
  })
});

// getUser('a', (err, user) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('user:', user);
// });

console.log('End');
