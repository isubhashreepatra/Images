// Create image list component
//Import React
import React from 'react';
import ImageDetail from './image-detail';


//Create component
const ImageList = (props) => {
	const RenderedImages = props.images.map(image =>
		 <ImageDetail key={image.id} imageFile = {image}/>
	);

	return (
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};

//Export component
export default ImageList;
