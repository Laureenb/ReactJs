import React, { Component }from 'react';

export default class Input extends Component {
  	render() {
	    return (
	      <div>
	   
			<input type="text" value={this.props.inputValue} onChange={this.props.inputOnChange} />

	      </div>
	    );
	}
}

