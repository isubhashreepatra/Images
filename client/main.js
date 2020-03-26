//import react library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image-list'
import axios from 'axios';


//create component
class App extends Component {
	constructor(props){
		super(props);
		this.state = { imagesFromApi: [] };
	}
	componentWillMount(){
		//Fantastic place to load data
		axios.get('https://pixabay.com/api/?key=9685300-b2d7cdfe85dad99dbecb025ca&q=tea&image_type=photo')
			.then(response => this.setState({ imagesFromApi: response.data.hits }));
	}

	render() {
		console.log(this.state.imagesFromApi);
		return (
				<div>
				  <ImageList images={this.state.imagesFromApi}/>
				</div>
		);

	}

};


Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));

});
