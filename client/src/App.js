import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={ MovieList } />
      <Route path="/movies/2" component={ Movie } />
    </div>
  );
};

export default App;
