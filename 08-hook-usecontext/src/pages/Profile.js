import React from 'react'
import { ChangeProfile } from '../components/ChangeProfile'
import { useContext } from 'react';
import { AppContext } from '../App';

function Profile() {
  const { username } = useContext(AppContext);

  return (
    <div>
      THIS IS PROFILE PAGE and Username is: {username}
      <ChangeProfile />
    </div>
  )
}

export default Profile
