import { addRoute } from 'meteor/vulcan:core';

import MoviesList from '../components/FirstComponent.jsx';

addRoute({ name: 'movies', path: '/', component: MoviesList });
