import React from 'react'
import AuthDetails from './AuthDetails'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'

const Home = () => {
  return (
    <div>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  )
}

export default Home
