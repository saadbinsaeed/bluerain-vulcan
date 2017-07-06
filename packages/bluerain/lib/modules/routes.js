import { addRoute } from 'meteor/vulcan:core';

import MoviesList from '../components/pages/IndexPage';
import login from '../components/pages/LoginPage';

addRoute([{ name: 'movies', path: '/', component: MoviesList }
  ,{ name: 'Login', path: '/login', component: login }

]);
