var React = require('react');

// This is ES6 syntax
class Popular extends React.Component {
    constructor(props){
        super(props)
        // INITIAL STATE FOR THIS COMPONENT
        this.state = {
            selectedLanguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage(lang) {
        // UPDATE STATE FOR THIS COMPONENT
        this.setState(function(){
            return {
                selectedLanguage: lang
            }
        })
    }
    // renders UI
    render () {
        var languages = ['All', 'Javascript', 'Ruby','Java', 'CSS', 'Python']
        return (
            // UI FOR COMPONENT
            // This is JSX not HTML
        <div>
            <ul className='languages'>
                {languages.map((lang) => {
                    return (
                        <li 
                        style = {lang === this.state.selectedLanguage ? {color: '#d0021b'}: null}
                        onClick={this.updateLanguage.bind(null,lang)}
                        key={lang}>
                            {lang}
                        </li>
                    )
                })}
            </ul>
        </div>
        )

    }
}

module.exports = Popular;