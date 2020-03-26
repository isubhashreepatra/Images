import React from 'react';
import ImageScore from './image-score';

const ImageDetail = (props) => {

	return (
		<li className="media list-group-item">
			<div className="media-left">
				<img src={props.imageFile.largeImageURL} />
			</div>
			<div className="media-body">
				<h4 className="media-heading">
					{props.imageFile.user}
				</h4>
				<p>{props.imageFile.tags}</p>
			</div>
			<ImageScore likes = {props.imageFile.likes} favs = {props.imageFile.favorites} views = {props.imageFile.views}/>
		</li>

	);

};

export default ImageDetail;
