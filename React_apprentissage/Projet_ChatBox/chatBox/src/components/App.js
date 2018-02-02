import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';

class App extends React.Component {

	state = {
		messages: {}
	}

	addMessage = message => {
		// Copier le State
		const messages = {...this.state.message};
		// On ajoute le message avec une clé timestamp
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		// Mettre à jour notre State
		this.setState({ messages });
	};

	render() {
		return (
			<div className="box">
				<div>
					<div className="messages">
						<Message pseudo={this.props.params.pseudo} />
					</div>
					<Formulaire addMessage={this.addMessage} />
				</div>
			</div>
		)
	}
}

export default App;