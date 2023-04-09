import React from 'react'
import { ChangeProfile } from '../components/ChangeProfile'

function Profile(props) {
  return (
    <div>
      THIS IS PROFILE PAGE and Username is: {props.username}
      <ChangeProfile setUsername={props.setUsername}/>
    </div>
  )
}

export default Profile
