import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// npm install --save youtube-api-search
// --save means save it to package.json
const API_KEY = 'AIzaSyA_VLUYYzEAHuqkrxBKUN3dTDyboRRv0l8';

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      // this.setState({ videos: videos });
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
// class - App
// instance - <App />
// DOM element target container - document.querySelector('.container')

// downwards data flow - only the most parent component should be responsible for
// fetching data
