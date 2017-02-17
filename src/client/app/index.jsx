import React from 'react';
import {render} from 'react-dom';
import NameCard from './NameCard.jsx';

class App extends React.Component {
  render () {
  	var name = "Daniel";
    return <NameCard name={name} clickedHandler={this.handleNameCardClicked} />;
  }

  handleNameCardClicked(name) {
  	console.log(name);
  }
}

render(<App/>, document.getElementById('app'));
