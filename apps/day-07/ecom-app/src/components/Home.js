import React from 'react';
import { getUser } from '../api/storage';

const Home = () => {
  let { name } = getUser() || {};
  name = name || 'User';

  return <div>
    <h3>App Home</h3>
    <h4>Welcome {name}!</h4>
  </div>;
};

export default Home;
