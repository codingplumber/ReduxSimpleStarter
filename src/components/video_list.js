import React, { Component } from 'react';
import VideoListItem from './video_list_item';

// props is coming from index.js as videos={this.state.videos}
// here props in an argument because it's a function-based component
// in a class-based component props are available anywhere in any method
// we define as this.props
// when you change a function-based component to a class-based component
// you have to update props to this.props

// list items must have a key so that react knows which element to update
const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
        // onVideoSelect is being passed through to VideoListItem
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
