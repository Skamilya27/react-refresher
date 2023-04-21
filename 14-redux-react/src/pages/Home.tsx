import React from 'react'
import { useSelector } from 'react-redux/es/exports';

export const Home = () => {

    const username = useSelector((state: any) => state.user.value.username)
  return (
    <div>
        This is a home page
        <p>The username is showing here: {username}</p>

    </div>
  )
}
