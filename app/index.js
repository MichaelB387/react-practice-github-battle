var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');


// This is ES6 syntax
class App extends React.Component {
    // renders UI
    render () {
        return (
            // This is JSX not HTML
            <div>
                Hello React Training!
            </div>
        )

    }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);