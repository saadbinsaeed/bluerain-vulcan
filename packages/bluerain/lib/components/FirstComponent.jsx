import React, { PropTypes, Component } from 'react';
import { Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';

const MoviesList = ({results = [], currentUser, loading, loadMore, count, totalCount}) =>

  <div style={ { maxWidth: '500px', margin: '20px auto' } }>

    Hello World!

    {/* user accounts placeholder */}

      <div className="movies">

        {/* new document form placeholder */}

        {/* documents list placeholder */}

        {/* load more placeholder */}

      </div>

  </div>

export default MoviesList;
