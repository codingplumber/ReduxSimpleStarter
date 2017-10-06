import React from 'react';

const VideoListItem = ({video}) => {
  // ({video}) above = const video = props.video;
  // it says that the props object has a property of video, and to declare
  // a new variable named video
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
