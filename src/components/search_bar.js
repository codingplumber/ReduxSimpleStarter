// React, { Component } same thing as const Component = React.component
import React, { Component } from 'react';

// use class-based component if you need to store some state
// the class (object) SearchBar extend the React.Component
class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value) } />;
  }

  // ^ onChange={this.onInputChange} - watching change event on the input
  // see react docs for other events
  // V event handler - whenever input changes run the code inside of here
  // event handlers are always called with an event object
  // the event describes info about the event that occured
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  // our event handler is now in the onChange above
}

export default SearchBar;
