// npm install --save lodash (--save means save it to package.json)
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// npm install --save youtube-api-search
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyA_VLUYYzEAHuqkrxBKUN3dTDyboRRv0l8';

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    // component level state
    this.state = {
      videos: [],
      selectedVideo: null
    };

    // sets our initial search to surfboards
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      // this.setState({ videos: videos });
      this.setState({
        videos: videos,
        // sets the initial video at videos[0]
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // throttles the videoSearh function to keep typing from feeling laggy
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
  // when SearchBar calls onSearchTermChange with a term, it will call
  // videoSearch with that term - ( term => this.videoSearch(term) )
  // this function has been replaced with the videoSearch with lodash
  // to throttle it
  // it is now being called once every 300 milliseconds

  // if VideoList calls onVideoSelect with a video,
  // the selectedVideo state on App is going to update
  // it is available on props in videoList as props.onVideoSelect
  // passing callbacks like this is how parents talk to their children
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
// class - App
// instance - <App />
// DOM element target container - document.querySelector('.container')

// downwards data flow - only the most parent component should be responsible for
// fetching data
