var React = require('react');

// This is ES6 syntax
class Popular extends React.Component {
    // renders UI
    render () {
        var languages = ['All', 'Javascript', 'Ruby','Java', 'CSS', 'Python']
        return (
            // This is JSX not HTML
            <ul className='languages'>
                {languages.map(function(lang){
                    return (
                        <li key={lang}>
                            {lang}
                        </li>
                    )
                })}
            </ul>
        )

    }
}

module.exports = Popular;