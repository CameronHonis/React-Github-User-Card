import React from 'react'

class SearchBar extends React.Component{
  constructor(props){
    super()
    this.props = props
    this.state = {
      searchText: '',
    }
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.updateSearch(this.state.searchText)
    this.setState({searchText: ''})
  }

  render(){
    console.log(this.props)
    return(
      <>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='searchText'
            value={this.state.searchText}
            onChange={e => this.setState({searchText: e.target.value})}
          />
          <button type='submit'>Search</button>
        </form>
      </>
    )
  }
}

export default SearchBar