import React from 'react';

const VideoDetail = ({video}) => {
  // this if accounts for the null value error (bundle.js:20982 Uncaught TypeError:
  // Cannot read property 'id' of undefined) that you get when the app initially
  // loads and has no value from the render function on index.js
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/'${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
