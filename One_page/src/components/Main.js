import React, { Component }from 'react';

import Card from './Card';
export default class Main extends Component {
  	render() {
	    return (
	      <div className="header">
	    	<div class="inner">
				<span class="icon major fa-cloud">Main</span>
			</div>
			<ul>
				<li>toto</li>
			</ul>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
	      </div>
	    );
	}
}