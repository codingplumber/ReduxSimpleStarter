import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// npm install --save youtube-api-search
// --save means save it to package.json
const API_KEY = 'AIzaSyA_VLUYYzEAHuqkrxBKUN3dTDyboRRv0l8';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
// class - App
// instance - <App />
// DOM element target container - document.querySelector('.container')
