var React = require('react')
var Button = React.createClass({
	getInitialState: function() {
		return {
			number: 0,
			label: "s"
		}
	},

	changeNumberLikes: function() {
		var s = 's';
		if (this.state.number === 0) {
			s = ''
		}
		this.setState({
      		number: this.state.number + 1,
      		label: s
    	})
	},


	render: function() {
		return (
			<div>
				<label>
				<button id="button" onClick={this.changeNumberLikes}>Like{this.state.label} {this.state.number}</button>
				</label>
			</div>
		)
	}
})


module.exports = Button
