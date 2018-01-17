var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api')

// This is a stateless functional component
function SelectLanguage (props) {
    var languages = ['All', 'Javascript', 'Ruby','Java', 'CSS', 'Python']
    
    return (
        <ul className='languages'>
        {languages.map((lang) => {
          return (
              <li 
              style = {lang === props.selectedLanguage ? {color: '#d0021b'}: null}
              onClick={props.onSelect.bind(null,lang)}
              key={lang}>
                  {lang}
              </li>
          )
      })}
  </ul>
    )
}



SelectLanguage.PropTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

// This is ES6 syntax
class Popular extends React.Component {
    constructor(props){
        super(props)
        // INITIAL STATE FOR THIS COMPONENT
        this.state = {
            selectedLanguage: 'All',
            repos: null
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
        return (
        <div>
            <SelectLanguage
              selectedLanguage={this.state.selectedLanguage}
              onSelect={this.updateLanguage}/>

        </div>
        )
    }
}

module.exports = Popular;