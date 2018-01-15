var React = require('react');

// This is ES6 syntax
class Popular extends React.Component {
    // renders UI
    render () {
        var languages = ['All', 'Javascript', 'Ruby','Java', 'CSS', 'Python']
        return (
            // This is JSX not HTML
            <div>
                Popular!
            </div>
        )

    }
}

module.exports = Popular;