import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDgOgjkv-BxlTvcMK2jyXnaHtQACcy_NQ8';

const App = () => {
  return (
      <div>
          <SearchBar />
      </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
