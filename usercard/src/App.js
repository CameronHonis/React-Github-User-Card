import React from 'react';
import Usercard from './Usercard.js'
import SearchBar from './SearchBar.js'
import axios from 'axios'
import './App.css';

const loadUsers = ['code-dependent','cladams0203']

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      userData: [],
      userToAdd: '',
    }
  }

  updateSearch = searchText => {
    this.setState({userToAdd: searchText})
  }

  componentDidMount(){
    for (let i = 0; i < loadUsers.length; i++){
      axios.get(`https://api.github.com/users/${loadUsers[i]}`)
        .then(res => this.setState({userData: [...this.state.userData, res.data]}))
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.userToAdd !== prevState.userToAdd){
      console.log(this.state.userToAdd)
      const searchTerm = this.state.userToAdd
      axios.get(`https://api.github.com/users/${searchTerm}`)
        .then(res => this.setState({userData: [...this.state.userData, res.data]}))
      this.setState({userToAdd: ''})
    }
  }

  render(){
    let usercardKey = 0
    return(
      <div className='App'>
        <SearchBar updateSearch={this.updateSearch}/>
        {this.state.userData.map(v => (<Usercard userData={v} key={++usercardKey} />))}
      </div>
    )
  }
}

export default App;
