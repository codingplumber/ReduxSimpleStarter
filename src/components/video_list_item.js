import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // ({video}) above = const video = props.video;
  // ({onVideoSelect}) above = const onVideoSelect = props.onVideoSelect;
  // it says that the props object has a property of video, and to declare
  // a new variable named video
  const imageUrl = video.snippet.thumbnails.default.url;

  // whenever a user clicks on the li
  // it will call onVideoSelect, and pass it this particular li's video
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
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
