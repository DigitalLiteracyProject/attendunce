import React from 'react';

class NameCard extends React.Component {
	constructor(props) {
		super(props);
		this.updateClick = () => {this._updateClick();};
		this.state = {
			clicked: 0,
		};
	}

	render() {
		return <p onClick={this.updateClick}>{this.props.name}: {this.state.clicked}</p>;
	}

	_updateClick() {
		this.setState({
			clicked: this.state.clicked + 1,
		});
		this.props.clickedHandler(this.props.name);
	}
}

export default NameCard;
