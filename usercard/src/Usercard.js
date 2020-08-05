import React from 'react'

class Usercard extends React.Component{
  constructor(props){
    super()
    this.props = props
  }

  render(){
    const { userData } = this.props
    return(
      <div className='usercard'>
        <img src={userData.avatar_url} alt='avatar' />
        <div className='usercardText'>
          <h2>{userData.name}</h2>
          <p>{userData.login}</p>
          <p>{userData.location}</p>
          <p>Bio: {!userData.bio ? 'n/a' : userData.bio.length > 40 ? userData.bio.slice(0,40)+'...' : userData.bio}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
        </div>
      </div>
    )
  }
}

export default Usercard