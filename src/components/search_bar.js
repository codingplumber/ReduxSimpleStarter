// React, { Component } same thing as const Component = React.component
import React, { Component } from 'react';

// use class-based component if you need to store some state
// the class (object) SearchBar extend the React.Component
class SearchBar extends Component {
  // how we intitalize state
  // called automatically whenever new instance of class is created
  // used for intializing variables, state, etc...
  constructor(props) {
    // super is a method on the parent class React.component
    super(props);

    // initialization of state
    // term is a property on this state object
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  // set state with the term - this.setState({term});
  // and call the callback from App (index.js) to set its videos state
  // with the new term - this.props.onSearchTermChange(term);
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // when we tell the input that its value is this.state.term we are turning it
  // into a controlled field
  // a controlled field - a form element whose value is set by the state
  // rather than the other way around - the state should tell the input
  // what its current value should be
  // its value changes when the state changes
  // this.setState({ term: event.target.value }) - how we update state
  // ^ onChange={this.onInputChange} - watching change event on the input
  // see react docs for other events (this has been split out to a separate method now)
  // V event handler - whenever input changes run the code inside of here
  // event handlers are always called with an event object
  // the event describes info about the event that occured
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  // our event handler is now in the onChange above
}

export default SearchBar;

// state is a plain JS object that is used to record and react to events
// each class-based object has its own state
// the render function is reran everytime the state is changed
