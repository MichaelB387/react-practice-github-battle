var React = require('react');
var Popular = require('./Popular')

// This is ES6 syntax
class App extends React.Component {
    // renders UI
    render () {
        return (
            // This is JSX not HTML
            <div className='container'>
                <Popular/>
            </div>
        )

    }
}

module.exports = App;