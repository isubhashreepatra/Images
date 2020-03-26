import React from 'react';

const ImageScore = (props) => {

const {likes, favs, views} = props;
const likesPercent = `${100 * (likes / 1000)}%`;
const favPercent = `${100 * (favs / 1000)}%`;

return (
  <div>
    Likes:
    <div className="progress">
      <div style={{ width: likesPercent}} className="progress-bar progress-bar-info progress-bar-striped"/>
    </div>
    Favorites
    <div className="progress">
      <div style={{ width: favPercent}} className="progress-bar progress-bar-warning progress-bar-striped"/>
    </div>
  </div>

);

};

export default ImageScore;
