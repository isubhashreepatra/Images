import React from 'react';

const ImageScore = (props) => {
//props.ups is the number of likes
//prop.hearts is the number of favorites
const {likes, favorites, views} = props;
const likesPercent = `${100 * (likes/(likes + favorites))}%`;
const favPercent = `${100 * (favorites/(likes+favorites))}%`;

return (
  <div>
    Likes & Favorites
    <div className="progress">
      <div style={{ width: likesPercent}} className="proress-bar progress-bar-striped progress-bar-success"></div>
      <div style={{ width: favPercent}} className="proress-bar progress-bar-striped proress-bar-warning "></div>
    </div>
  </div>

);

};

export default ImageScore;
