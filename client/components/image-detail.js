import React from 'react';
import ImageScore from './image-score';

const ImageDetail = (prop) => {

	return (
		<li className="media list-group-item">
			<div className="media-left">
				<img src={prop.picture.previewURL} />
			</div>
			<div className="media-body">
				<h4 className="media-heading">
					{prop.picture.user}
				</h4>
				<p>{prop.picture.tags}</p>
			</div>
			<ImageScore likes = {prop.picture.likes} favs = {prop.picture.favorites} views = {prop.picture.views}/>
		</li>

	);

};

export default ImageDetail;
